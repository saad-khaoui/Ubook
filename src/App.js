import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Med from './components/Med';
import Science from './components/Science';
import Thriller from './components/Thriller';
import Business from './components/Business';
import Sign from './components/Sign';


function App() {
  switch (window.location.pathname){
    case  '/' :
      return (
        <div className="App">
          <Navbar/>
          <Main/>
          
        </div>
      );
      
    case '/Med' :
    return (
      <div className="App">
        <Navbar/>
        <Med/>
      </div>
    );
    case '/science' :
    return (
      <div className="App">
        <Navbar/>
        <Science/>
      </div>
    );
    
    case '/thriller' : 
    return (
      <div className="App">
        <Navbar/>
        <Thriller/>
      </div>
    );

    case '/bussiness' : 
    return (
      <div className="App">
        <Navbar/>
        <Business/>
      </div>
    );

    case  '/sign' :
      return (
        <div className="App">
          <Navbar/>
          <Sign/>
          
        </div>
      );
  }
}

export default App;