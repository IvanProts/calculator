import React from 'react';
import classes from './Calculator.module.css'

class Calculator extends React.Component{
  render(){
    const toFar = ['distance'];
    if (this.props.distance > 1600) {
      toFar.push('showDisplay')
    } else {
      toFar.splice([1])
    }

    const toClose = ['distance'];
    if (this.props.distance < 100 && this.props.distance !== '') {
      toClose.push('showDisplay')
    } else {
      toClose.splice([1])
    }

    return(
      <div className={classes.Calculator}>
        <h2 className={toFar.join(' ')}>Too far!</h2>
        <h2 className={toClose.join(' ')}>Too close!</h2>
        <input 
        type='text' 
        placeholder='Distance in mil.' 
        value={Math.round(this.props.miliradians)}
        readOnly>
        </input>
        <input 
        type='text'
        placeholder='Distance in meters' 
        value={this.props.distance} 
        onChange={this.props.inputChange}>
        </input>
        <div className={classes.buttons}>
          <button type='submit' onClick={this.props.calculateDistance}>=</button>
          <button type='reset' onClick={this.props.resetValue}>Reset</button>
        </div>
      </div>
    )
  }
}

export default Calculator;