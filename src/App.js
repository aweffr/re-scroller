import React, {Component} from 'react';
import Number from './Components/Number';
import './App.css';

class App extends Component {

  state = {num: 15};

  onChange = (e) => {
    let {value} = e.target;
    if (!value) value = 0;
    value = value % 100;
    this.setState({num: parseInt(value)});
  };

  render() {
    return (
      <div>
        <div style={{height: 500, width: 500}}/>

        <Number num={this.state.num} height={40}/>

        <input type="number" onChange={this.onChange} value={this.state.num}/>
      </div>
    );
  }
}

export default App;
