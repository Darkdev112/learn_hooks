import React, { useRef } from 'react'
import Button from './Button'

const ImperativeHandle = () => {
  const buttonRef = useRef(null);
  return (
    <>
        <button onClick={()=>{
            buttonRef.current.alterToggle();
        }}>Button from Parent</button>
        <Button ref={buttonRef}/>
    </>
  )
}

export default ImperativeHandle