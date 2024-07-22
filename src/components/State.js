import React, { useState } from 'react'
import "../styles/State.css"

const State = () => {
    const [count,setCount] = useState(0);
    const [showText, setShowText] = useState(false);
    
    const handleClick = () => {
        setCount(count+1);
        setShowText(!showText);
    }

  return (
    <div className='container'>
        <h1 className="counter">{count}</h1>
        <button className='button' onClick={handleClick}>Click Here</button>
        {showText && <p className='showtext'>This is the text</p>}
    </div>
  )
}

export default State