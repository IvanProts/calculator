import './App.css';
import React from 'react';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      distance: 0,
      miliradians: 0
    }
  this.inputChange = this.inputChange.bind(this)
  }
  calculateDistance = () => {
    const oldDistance = this.state.distance;

    const mil = oldDistance / 2;

    this.setState({
      miliradians: this.mil
    })
    console.log('1');
  }

  inputChange = (event) => {
    this.setState({distance: event.target.value})
    console.log(this.state);
  }

  render(){
    return(
    <div className='main-part'>
      <h1>Arthillery calculator for Hell Let Loose</h1>
      <input type='number' placeholder='Distance in mil.' value={this.state.distance} onChange={this.inputChange}></input>
      <h2>Enter distanse in m.</h2>
      <input type='number' placeholder='Distance in meters'></input>
      <button type='submit' onClick={this.calculateDistance}>=</button>
    </div>
    )
  }
}

export default App;
