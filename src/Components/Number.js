import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Digit from './Digit';
import styles from './Number.module.css';

class Number extends Component {

  state = {
    numArrs: [
      [1, 3, 5, 7],
      [2, 4, 6, 8]
    ]
  };

  componentWillReceiveProps(nextProps) {
    let [arr1, arr2] = this.state.numArrs;
    const {num} = nextProps;

    arr1 = [...arr1, Math.floor(num / 10) % 10];
    arr2 = [...arr2, num % 10];

    this.setState({
      numArrs: [arr1, arr2]
    });
  }

  onTransitionEnd = (e, idx) => {
    e.stopPropagation();
    e.preventDefault();

    let [arr1, arr2] = this.state.numArrs;
    arr1 = [arr1[arr1.length - 1],];
    arr2 = [arr2[arr2.length - 1],];
    this.setState({
      numArrs: [arr1, arr2]
    })
  };

  render() {
    const {height} = this.props;
    const {numArrs} = this.state;

    return (
      <div className={styles.numberContainer} style={{height: height}}>
        <Digit
          height={height}
          numArr={numArrs[0]}
          idx={0}
          onTransitionEnd={this.onTransitionEnd}
        />
        <Digit
          height={height}
          numArr={numArrs[1]}
          idx={1}
          onTransitionEnd={this.onTransitionEnd}
        />
      </div>
    );
  }
}

Number.propTypes = {
  height: PropTypes.number.isRequired
};

export default Number;