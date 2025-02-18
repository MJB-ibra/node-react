import React from 'react'
import { useState } from 'react'
function State() {
  const [count,setCount] = useState(0)
  const increment = () =>{
 setCount(count+1)
  }
  const decrement = ()=>{
    setCount(count-1)
  }
 
  return (
 <>
 <p>Like This</p>
  <button onClick={increment}>Increment</button>
  <p>{count}</p>
  <button onClick={decrement}>Decrement</button>
 
 </>
  )
}

export default State
