import React from 'react'
import { useState, useEffect } from 'react'
import styles from './UseEffectForTitle.module.css'



const UseEffectForTitle = () => {
    const [count, setCount] = useState(0)

    const counterIncreament =()=>{
    
    setCount(count + 1)
}
useEffect(()=>{
 alert('Component is successfully mounted');
}, [])

useEffect(()=>{
console.log('the count is', count);
document.title = `count is ${count}`
}, [count])

  return (
    <div>
    <h2>count is: {count}</h2>
    <button className={styles.title} onClick={counterIncreament}>start count</button>
    </div>
  )
}

export default UseEffectForTitle