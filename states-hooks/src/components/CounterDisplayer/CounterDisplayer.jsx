import { Component } from 'react'
import styles from './CounterDisplayer.module.css';

export default class CounterDisplayer extends Component {
  render() {
    return (
      <div className={styles.counter}>
        All clicks counter: {this.props.clickCount}
      </div>
    )
  }
}
