import React from 'react'
import { useState } from 'react'
import styles from './IncreaseDecreaseCount.module.css'
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
    <div > 
        <h2>Current count is: {count} </h2>
        <button className={styles.buttoncount} onClick={decreaseButton}>Decrease</button>
        <button  className={styles.buttoncount} onClick={resetButton}>Reset</button>
        <button className={styles.buttoncount} onClick={increaseButton}>Increase</button>
    </div>
  )
}

export default IncreaseDecreaseCount