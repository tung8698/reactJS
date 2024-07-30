import React, { Component } from 'react'

export default class EventDemo3 extends Component {
    constructor(props){
        super(props);
        //khoi tao state
        this.state = {
            name:"Tung abc",
            email:"Tungabc@gmail.com"
        }
        
    }
    // Ham xu ly su kien, lay du lieu trong state, chuyen len component App thong qua props
    eventHandleClick = () =>{
        this.props.onReciver(this.state.name);
    }
  render() {
    let {renderCompany} = this.props;
    return (
      <div className='alert alert-danger'>      
        <h2>Event: Su dung du lieu state, props</h2>
        <hr />
        <p>Xin chao {this.state.name}</p>
        <button onClick={this.eventHandleClick}>Chuyen du lieu name len app thong qua props</button>
        <hr />
        <h3>{this.props.renderCompany}</h3>
        <h3>{renderCompany}</h3>        
      </div>
    )
  }
}
