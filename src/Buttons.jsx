import React from 'react'

const Buttons = ({setColorType,handleRgbColor, handleHexColor, colortype}) => {

  return (
    <>
    <div className="column flex items-start justify-center gap-2 py-3 sm:flex-row flex-col items-center">
          <button className="px-10 py-3 text-white text-xl bg-black" onClick={()=>setColorType('hex')}>Hex Color</button>
          <button className="px-10 py-3 text-white text-xl bg-black" onClick={()=>setColorType('rgb')}>RGB Color</button>
          <button className="px-10 py-3 text-white text-xl bg-black" onClick={colortype==='hex'? handleHexColor: handleRgbColor}>Create Random Color</button>
    </div>
    </>
  )
}

export default Buttons
