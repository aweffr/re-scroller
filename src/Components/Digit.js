import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Digit.module.css';

class Digit extends Component {
  render() {
    const {numArr, height, idx, onTransitionEnd} = this.props;

    const translateCnt = Math.max(height * (numArr.length - 1), 0);

    return (
      <div className={
        classNames(styles.digitContainer)
      } style={{
        transform: `translateY(-${translateCnt}px)`
      }} onTransitionEnd={(e) => onTransitionEnd(e, idx)}
      >
        {
          numArr.map((val, idx) => (
            <div key={idx} style={{height: height}}>{val}</div>
          ))
        }
      </div>
    );
  }
}

Digit.propTypes = {
  numArr: PropTypes.array.isRequired,
  height: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired
  ])
};

export default Digit;