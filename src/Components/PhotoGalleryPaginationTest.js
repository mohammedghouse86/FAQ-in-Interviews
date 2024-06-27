import React, { useEffect, useState, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faDoorOpen } from '@fortawesome/free-solid-svg-icons'


const PhotoGalleryPagination_Test = () => {
  const [data, setData] = useState([]);
  const [num, setNum] = useState(1);
  const [count, setCount] = useState(0);
  const limit = 10;
  const [offset, setOffset] = useState(0);
  const url = `https://api.slingacademy.com/v1/sample-data/photos?limit=${limit}&offset=${offset}`;
  useEffect(() => {
    const fun_call_api = async () => {
      const response = await fetch(url);
      const data1 = await response.json();
      setData(data1.photos);
    }
    fun_call_api();
  }, [url])
  const paginatedItem = useMemo(() => data.slice(count, count + 1),[count,data])
  const html = paginatedItem.map(item =>
  (<div className='Container my-1' key={item.id} style={{ width: '800px', height: '500px' }}>
    <img src={item.url} alt={item.title} />
    <h1 style={{ fontFamily: 'cursive', fontSize:'30px' }}><p>{item.title}</p></h1>
  </div>))

  const fun_setCout = (item) => {
    setCount(item + 1)
  }

  useEffect(()=>{
    if(paginatedItem.length>0){
    setNum(paginatedItem[0].id)
    console.log(paginatedItem[0].id);  
  }
  },[paginatedItem])

  const pages = useMemo(() => Math.ceil(data.length), [data.length]);
  

const htmlPages = useMemo(() =>{
  const pageArr = [...Array(pages).keys()]
  return ( pageArr.map(item => (
  <div
    className='Container my-1 mx-2'
    style={{ fontFamily: 'cursive' }}
    key={item}
    onClick={() => {
      //setNum(item + offset);
      fun_setCout(item-1);
      //console.log('this is the page you are on =', item + offset);
    }}
  >
    {num === Number(item)+offset+1? <p style={{color:'blue'}}>{Number(item) + offset+1}</p>:<p>{Number(item) + offset+1}</p>}
  </div>
)))}, [offset, num, pages]);

  const fun_leftclick = () => {
    //console.log('this is the page you are on  =', num);
    if (count > 0) {
      setCount(count - 1)
      setNum(num-1)
    }
  }
  const fun_rightclick = () => {
    
    if (count < data.length - 1) {
      setCount(count + 1)
      setNum(num+1)
    }
    //console.log('this is the page you are on  =', num);
  }
  const fun_turnpageRight = () => {
    //console.log("paginatedItem.id =",paginatedItem[0].id);
    if (paginatedItem[0].id < 132) {
      setOffset(offset + 10);
      setCount(0)
    }
  }
  const fun_turnpageLeft = () => {
    //console.log("paginatedItem.id =",paginatedItem[0].id);
    if (paginatedItem[0].id >9) {
      setOffset(offset - 10);
      setCount(0)
    }
  }

  return (
    <div className='Container' style={{ paddingTop: '70px' }}>
      <div className='Container' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {count === 0 && offset !==0? <FontAwesomeIcon icon={faDoorOpen} style={{ color: 'blue', height: '60px', width: '100px', cursor: 'pointer' }} onClick={fun_turnpageLeft} />:
        <FontAwesomeIcon icon={faArrowLeft} style={{ color: 'blue', height: '60px', width: '100px', cursor: 'pointer' }} onClick={fun_leftclick} />
        
        }
        {html}
        {count < 9 ?
          <FontAwesomeIcon icon={faArrowRight} style={{ color: 'blue', height: '60px', width: '100px', cursor: 'pointer' }} onClick={fun_rightclick} /> :
          <FontAwesomeIcon icon={faDoorOpen} style={{ color: 'blue', height: '60px', width: '100px', cursor: 'pointer' }} onClick={fun_turnpageRight} />
        }
      </div>

      <div className='Container' style={{ display: 'flex', cursor: 'pointer', justifyContent: 'center', fontSize: '40px', color: 'red', paddingTop: '200px' }}>{htmlPages} </div>
    </div>
  )
}

export default PhotoGalleryPagination_Test
