import React, { Component } from 'react'

export default class FormDemo1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            studentName: "Devmaster"
        }
    }
    handleChange = (event) =>{
        let name = event.target.name
        let val = event.target.value
        this.setState({
            [name]:val
        })
        this.setState({
            studentName:event.target.value
        })
    }
    //Ham xu li khi submit form
    handleSubmit = (event) =>{
        event.preventDefault();
        alert(this.state.studentName);
    }
  render() {
    return (
      <div className='alert alert-info'>
        <h1>Form: controlled Component</h1>
        <form>
            <div className='form-group'>
                <label htmlFor=''>Student Name:</label>
                <input type='text' className='form-control' id='studentName'
                    value={this.state.studentName}
                    name='studentName'
                    onChange={this.handleChange}
                />
            </div>
            <button className='btn btn-primary my-2' onClick={this.handleSubmit}>Submit</button>
            <p>{this.state.studentName}</p>
        </form>
      </div>
    )
  }
}
