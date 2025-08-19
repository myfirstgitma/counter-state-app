import React from "react";
import { useState, useEffect } from "react";
import styles from "./UseEffectForTitle.module.css";

const UseEffectForTitle = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert("Component is successfully mounted");
  }, []);

  useEffect(() => {
    // console.log('the count is', count);
    document.title = `count is now ${count}`;
  }, [count]);

  return (
    <div>
      <h2>count is: {count}</h2>
      <button
        className={styles.title}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        start count
      </button>
    </div>
  );
};

export default UseEffectForTitle;
