import React, { Component } from 'react'

export default class ListObjectRender extends Component {
    constructor(props){
        super(props);
        this.state ={
            products : [
                {title: 'Mien tron', isFood: true, id: 231},
                {title: 'Bun ca', isFood: true, id: 819},
                {title: 'Tra da', isFood: false, id: 591},
            ],
        }
    }
  render() {
    let elements = this.state.products.map((item, index)=>{
        return (
            <tr key={item.id}>
                <td>{index+1}</td>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.isFood?"Active":"Non-Active"}</td>
            </tr>
        )
    })
    return (
      <div>
        <h1>ListObjectRender</h1>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Id</th>
                    <th>Title</th>
                    <th>State</th>
                </tr>
            </thead>
            <tbody>
                {elements}
            </tbody>
        </table>
      </div>
    )
  }
}
