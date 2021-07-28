import './App.css';
import React from 'react';
import Calculator from './Calculator/Claculator'

class App extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        distance: '',
        miliradians: '',
      }
    }

  calculateDistance = () => {
    const oldDistance = this.state.distance;
    const mil = (1600 - oldDistance)/4.69+800
    if(mil !== 1142) {
      this.setState({
        miliradians: mil
      })
    }
  }

  inputChange = (event) => {
    this.setState({distance: event.target.value})
  }

  resetValue = () => {
    this.setState({
      distance: '',
      miliradians: ''
    })
  }

  render(){
    return(
    <div className='mainPart'>
      <h1>Arthillerry calculator for Hell Let Loose</h1>
      <Calculator
      distance={this.state.distance}
      miliradians={this.state.miliradians}
      calculateDistance={this.calculateDistance}
      inputChange={this.inputChange}
      resetValue={this.resetValue}
      addValues={this.addValuesInList}
      />
      <p style={{position: 'fixed', color: '#fff', fontSize: 20, bottom: -10}}>by Dred</p>
    </div>
    )
  }
}

export default App;