import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Digit from './Digit';
import styles from './Number.module.css';

class Number extends Component {

  state = {
    numArrs: [
      [1], [5],
    ],
    up: true,
  };

  componentWillReceiveProps(nextProps) {
    let [arr1, arr2] = this.state.numArrs;
    const {num} = nextProps;

    const up = (num > this.props.num);

    arr1 = [...arr1, Math.floor(num / 10) % 10];
    arr2 = [...arr2, num % 10];

    this.setState({
      numArrs: [arr1, arr2], up: up
    });
  }

  onTransitionEnd = (e, idx) => {
    e.stopPropagation();
    e.preventDefault();

    const {num} = this.props;


    let [arr1, arr2] = this.state.numArrs;
    arr1 = [Math.floor(num / 10) % 10,];
    arr2 = [num % 10,];
    this.setState({
      numArrs: [arr1, arr2]
    })
  };

  render() {
    const {height} = this.props;
    let {numArrs, up} = this.state;
    if (!up) {
      numArrs = numArrs.map(arr => arr.reverse());
    }

    return (
      <div className={styles.numberContainer} style={{height: height}}>
        <Digit
          height={height}
          numArr={numArrs[0]}
          idx={0}
          onTransitionEnd={this.onTransitionEnd}
          up={up}
        />
        <Digit
          height={height}
          numArr={numArrs[1]}
          idx={1}
          onTransitionEnd={this.onTransitionEnd}
          up={up}
        />
      </div>
    );
  }
}

Number.propTypes = {
  height: PropTypes.number.isRequired
};

export default Number;