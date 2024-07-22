import React, { useReducer } from 'react'
import "../styles/Reducer.css"

const Reducer = () => {
  const reducer = (state,action) => {
    switch(action.type){
      
      case "INCREMENT" : 
        return {
          count : state.count + 1,
          showText : state.showText
        }

      case "toggleShowText" :
        return{
          count : state.count,
          showText : !state.showText
        }
        
      default :
        return state
    }
  }

  const [state,dispatch] = useReducer(reducer, {
    count : 0,
    showText : true
  })
    
  const handleClick = () => {
     dispatch({type : "INCREMENT"})
     dispatch({type : "toggleShowText"})
  }

  return (
    <div className='container'>
        <h1 className="counter">{state.count}</h1>
        <button className='button' onClick={handleClick}>Click Here</button>
        {state.showText && <p className='showtext'>This is the text</p>}
    </div>
  )
}

export default Reducer