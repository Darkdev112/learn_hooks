import React,{useRef} from 'react'

const Ref = () => {
  const inputRef = useRef(null);
  
  const handleClick = () =>{
    inputRef.current.value =  ""
  }

  return (
    <div>
        <h1>Dev</h1>
        <input type="text" placeholder='Ex...' ref={inputRef}/>
        <button onClick={handleClick}>Change Name</button>
    </div>
  )
}

export default Ref