
import './App.css';
import Nav from './components/Nav.js';
 
import Img from './components/Img.js';
import Card from './components/Card';
import React from 'react';


function App() {
  return (

    <div>
        <Nav />
   
    <div  className='container'>
    

      
        
        <Card i="https://picsum.photos/201"   />

        <Card i="https://picsum.photos/202"  />

        <Card i="https://picsum.photos/203"  />

        <Card i="https://picsum.photos/204"  />
        
 
        </div>
    </div>
  );
}

export default App;
