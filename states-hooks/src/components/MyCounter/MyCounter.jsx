import React, { Component } from "react";
import CounterDisplayer from  "../CounterDisplayer/CounterDisplayer";
import EvenCounterDisplayer from '../EvenCounterDisplayer/EvenCounterDisplayer'
import styles from './MyCounter.module.css'


class MyCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }
  changeCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
 
  render() {
    return (
   <div >
        <button className={styles.button} onClick={this.changeCounter}>Click here</button>
        <div>All clicks counter: {this.state.counter}</div>
        <EvenCounterDisplayer clickCount={this.state.counter} />
   </div>
    )
  }
}
export default MyCounter;
