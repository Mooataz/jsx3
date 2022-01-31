import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import cat from './cat.jpg';
import pub from './pub.jpg'
import titlered from './form.css'
import ved from './ved.mp4'
function App() {
  return (
    <div className="App">
       <br/>
      
      <div class='div'>

 <h1 class='titlered'>Try</h1>

 <br />

 <img src={cat}/>

 <br />

 <img src={pub}/>

</div>

<video width="320" height="240" controls>

 <source src={ved} type="video/mp4" />

</video>
    </div>
  );
}

export default App;
