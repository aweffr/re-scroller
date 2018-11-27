import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Digit.module.css';

class Digit extends Component {

  state = {
    animating: true,
    translateCnt: 0
  };


  componentWillReceiveProps(nextProps) {

    const {numArr, height, idx, onTransitionEnd, up} = nextProps;

    let translateCnt, animating;
    if (up) {
      translateCnt = -Math.max(height * (numArr.length - 1), 0);
      animating = (numArr.length !== 1);
      this.setState({translateCnt, animating});
    } else {
      translateCnt = -Math.max(height * (numArr.length - 1));
      this.setState({translateCnt, animating: false});

      setTimeout(() => {
        this.setState({translateCnt: 0, animating: true})
      })
    }

  }

  render() {
    const {numArr, height, idx, onTransitionEnd, up} = this.props;
    const {animating, translateCnt} = this.state;

    return (
      <div className={
        classNames(styles.digitContainer, {[styles.animate]: animating})
      } style={{
        transform: `translateY(${translateCnt}px)`,
      }} onTransitionEnd={(e) => onTransitionEnd(e, idx)}
      >
        {
          numArr.map((val, idx) => (
            <div key={idx} className={styles.digit} style={{height: height}}>
              <div>{val}</div>
            </div>
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
  ]),
  up: PropTypes.bool.isRequired
};

export default Digit;