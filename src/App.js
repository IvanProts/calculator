import './App.css';
import React from 'react';
import Calculator from './Calculator/Claculator'

class App extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        distance: '',
        miliradians: '',
        list: [{
          meters: [],
          mils: []
        }]
      }
    }

  calculateDistance = () => {
    const oldDistance = this.state.distance;
    const mil = 1002 - (oldDistance / 4.17);
    if(mil !== 1002) {
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

  addValuesInList = () => {
    let list = this.state.list;
    const m = this.state.distance;
    const ml = this.state.miliradians;
    
    list.push({
      meters: m,
      mils: ml
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
    </div>
    )
  }
}

export default App;
