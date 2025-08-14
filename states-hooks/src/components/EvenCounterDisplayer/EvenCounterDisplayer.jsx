import { Component } from "react";
import styles from './EvenCounterDisplayer'
export default class EvenCounterDisplayer extends Component {
  render() {
    const { clickCount } = this.props;
    return (
      <div className={styles.even}>Even clicks Counter: {clickCount % 2 === 0 ? clickCount : clickCount-1}</div>
    );
  }
}
