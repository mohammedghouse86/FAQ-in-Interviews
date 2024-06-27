import React, { Suspense, lazy } from 'react';

const About = lazy(() => new Promise(resolve => { setTimeout(() => resolve(import('./About.js')),3000)}));
const Contact = lazy(() =>new Promise(resolve => { setTimeout(() => resolve( import('./Contact.js')),3000)}));

const LazyLoading_Test = () =>{
  return (
    <div className="App" style={{paddingTop:'60px'}}>
      <header className="App-header">
        <h1>Welcome to My App</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <About />
          <Contact/>
        </Suspense>
      </header>
    </div>
  );
}

export default LazyLoading_Test;
