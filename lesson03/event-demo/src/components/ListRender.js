import React, { Component } from 'react'

export default class ListRender extends Component {
  render() {
    let array = [1,2,3,4,5];
    let element = array.map((item,index)=>{
        return (

          <>
            <li>{item}</li>
          </>
        )
    })
    return (
      <div>
          <h1>ListRender</h1>
            <ul>
              {element}
            </ul>
      </div>
    )
  }
}
