import './App.css';
import React from 'react';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      distance: '',
      miliradians: ''
    }
  }
  calculateDistance = () => {
    const oldDistance = this.state.distance;
    const mil = oldDistance / 2;
    this.setState({
      miliradians: mil
    })
  }

  inputChange = (event) => {
    this.setState({distance: event.target.value})
  }

  resetValue = (event) => {
    this.setState({
      distance: '',
      miliradians: ''
    })
  }

  render(){
    const toFar = ['distance'];
    if (this.state.distance > 1600) {
      toFar.push('showDisplay')
    } else {
      toFar.splice([1])
    }

    const toClose = ['distance'];
    if (this.state.distance < 100 && this.state.distance !== '') {
      toClose.push('showDisplay')
    } else {
      toClose.splice([1])
    }

    return(
    <div className='main-part'>
      <h1>Arthillerry calculator for Hell Let Loose</h1>
      <h2 className={toFar.join(' ')}>Too far!</h2>
      <h2 className={toClose.join(' ')}>Too close!</h2>
      <input type='text' placeholder='Distance in mil.' value={this.state.miliradians} readOnly></input>
      <h2>Enter distanse in m.</h2>
      <input type='text' placeholder='Distance in meters' value={this.state.distance} onChange={this.inputChange}></input>
      <button type='submit' onClick={this.calculateDistance}>=</button>
      <button type='submit' onClick={this.resetValue}>Reset</button>
    </div>
    )
  }
}

export default App;
