import React, {Component} from 'react';
import Number from './Components/Number';
import './App.css';

class App extends Component {

  state = {num: 0};

  onChange = (e) => {
    const {value} = e.target;
    this.setState({num: parseInt(value)});
  };

  render() {
    return (
      <div>
        <Number num={this.state.num} height={40}/>
        <input type="number" onChange={this.onChange}/>
      </div>
    );
  }
}

export default App;
