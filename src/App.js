import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [line1, setLine1] = useState('')
  const [line2, setLine2] = useState('')
  const [image, setImage] = useState('')

  const onChangeLine1 = function (value){
    setLine1(value.target.value)
  }
  const onChangeLine2 = function (value){
    setLine2(value.target.value)
  }
  const setImg = function(value){
    setImage(value.target.value)
  }

  return (
    <div className="App">
      <select onChange={setImg}>
        <option value="1.jpg">Pepe in fire</option>
        <option value="2.jpg">Pepe thinking</option>
        <option value="3.jpg">Shrek random</option>
        <option value="4.jpg">CSGO img random</option>
        <option value="5.jpg">Pepe beautiful</option>
        <option value="6.jpg">Sponge Bob lul</option>
      </select> <br/>
      
      <input onChange={onChangeLine1} type="text" placeholder='Text Top'/> <br/>
      <input onChange={onChangeLine2} type="text" placeholder='Text Bottom'/> <br/>
      <button>Export</button>

      <div>
        <span>{line1}</span> <br/>
        <span>{line2}</span>
        <img src={"/Images/" + image }/>
      </div>

    </div>
  );
}

export default App;
