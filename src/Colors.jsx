import React from 'react'

const Colors = ({newcolor, colortype}) => {

    

  return (
    <>
      <div className="column flex items-center flex-col">
                <h3 className="my-24 text-5xl">{colortype==='rgb' ? 'RGB Color' : 'Hex Color'}</h3>
                <p className="text-4xl">{newcolor}</p>
        </div>
    </>
  )
}

export default Colors
