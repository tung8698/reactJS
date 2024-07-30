import React, { Component } from 'react'

export default class EventDemo2 extends Component {
    eventHandleClick1 = (param) => {
        alert("Hello world, \n" + param)
    }

    eventHandleClick2 = () => {
        alert("alert alert alert!!!")
    }
  render() {
    return (
      <div>
        <h2>Event Demo</h2>
        <button onClick={()=>this.eventHandleClick1("This is param")}>Button01</button>
        <button onClick={()=>this.eventHandleClick2}>Button02</button>
        <button onClick={this.eventHandleClick2}>Button03</button> 
      </div>
    )
  }
}
