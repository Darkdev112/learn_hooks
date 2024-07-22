import React,{useEffect, useState} from 'react'
import axios from 'axios'
import '../styles/Effect.css'

const Effect = () => {
  const [data,setData] = useState("");
  const [count,setCount] = useState(0);

  const handleClick = () => {
  setCount(count+1);
  }


  useEffect(()=>{
    console.log("useEffect ran");
    axios.get("https://jsonplaceholder.typicode.com/comments")
    .then((response)=>{
        setData(response.data[0].email);
    })
    .catch((error)=>{
        console.log(error)
    })    
  },[])
  return (
    <div className='container'>
        <h1 className='header'>Hello World {data}</h1>
        <h1 className="counter">{count}</h1>
        <button className='button' onClick={handleClick}>Click Here</button>        
    </div>
  )
}

export default Effect