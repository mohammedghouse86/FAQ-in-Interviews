import { useState, useEffect, useMemo } from 'react';
import Card from 'react-bootstrap/Card';

// Custom hook to fetch data from an API
function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, isLoading, error };
}

// Example usage of the custom hook
function CustomHook() {
  const { data, isLoading, error } = useFetch('https://jsonplaceholder.typicode.com/comments');
  const html = useMemo(() => data && Array.isArray(data) ? data.map(item => (
    <Card key={item.id} style={{ width: '30vw', alignItems:'center', margin:'20px'}}>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Title>{item.email}</Card.Title>
        <Card.Text>
          {item.body}
        </Card.Text>
      </Card.Body>
    </Card>
  )) : null, [data])
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='Container' style={{ paddingTop: '70px'}}>
      {data && (
        
          <div style={{ display: 'flex', flexWrap:'wrap', justifyContent: 'center'}}>{html}</div>
        
      )}
    </div>
  );
}

export default CustomHook;
