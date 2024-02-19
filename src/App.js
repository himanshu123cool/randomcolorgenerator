import { useState, useEffect } from "react";
import Buttons from "./Buttons";
import Colors from "./Colors";

function App() {

  const [colortype, setColorType] = useState('hex');
  const [newcolor, setNewColor] = useState('#fffff');

  const RandomColor = (length)=>{
      return Math.floor(Math.random()*length)
  }

  const handleHexColor = ()=>{
    const hex = ['1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    let hexColor = '#';

    for(let i=0; i<6; i++){
      hexColor += hex[RandomColor(hex.length)];
      
    }
    setNewColor(hexColor);
  }
  const handleRgbColor = ()=>{
    const red = RandomColor(256);
    const green = RandomColor(256);
    const blue = RandomColor(256);

    let rgbColor = `rgb(${red},${green},${blue})`;

    setNewColor(rgbColor)
  }

 
  
  useEffect(()=>{

    if(colortype==='rgb'){
      handleRgbColor();
    }
    else{
      handleHexColor();
    }

  },[colortype]);


  return (
      <div className="h-screen" style={{"backgroundColor":newcolor}}>
        <Buttons setColorType={setColorType} handleHexColor={handleHexColor} handleRgbColor={handleRgbColor} colortype={colortype}/>
        <Colors newcolor={newcolor} colortype={colortype}/>
      </div>
  );
}

export default App;
