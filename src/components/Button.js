import React, { forwardRef, useState, useImperativeHandle } from 'react'

const Button = forwardRef((props, ref) => {
  const [toggle,setToggle] = useState(false);
  useImperativeHandle(
    ref,
    () => {
      return {
        alterToggle : function alterToggle(){
            setToggle(!toggle);
        }
      } 
    }
  )
  return (
    <>
        <button>Button from Child</button>
        {toggle && <span>Toggle</span>}
    </>
  )
})

export default Button