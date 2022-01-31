import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import cat from './cat.jpg';
import pub from './pub.jpg'
function App() {
  return (
    <div className="App">
      <img src={cat}/> <br/>
      <img src={pub}/>
      
    </div>
  );
}

export default App;
