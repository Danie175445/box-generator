import './App.css';
import { useState } from 'react';
import ColorForm from './components/ColorForm';
import Box from './components/Box';

function App() {
  const [color,setColor] = useState("")
  const [boxes,setboxes] = useState([])
  return (
    <div className="App">
      <ColorForm color = {color} setColor= {setColor} setboxes = {setboxes} boxes = {boxes}/>
      {
        boxes.map(color => <Box color= {color} />)
      }
    </div>
  );
}

export default App;
