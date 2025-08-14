import React from 'react'
import { useState } from 'react'
const IncreaseDecreaseCount = () => {
    const [count, setCount] = useState(0)

const increaseButton = ()=>{
setCount(count + 1)
}
const resetButton = ()=>{
    setCount("0")
}
const decreaseButton = ()=>{
    setCount(count - 1)
}
  return (
    <div> 
        <h2>Current count is: {count} </h2>
        <button onClick={decreaseButton}>Decrease</button>
        <button onClick={resetButton}>Reset</button>
        <button onClick={increaseButton}>Increase</button>
    </div>
  )
}

export default IncreaseDecreaseCount