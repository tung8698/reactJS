import React, { Component } from 'react'

export default class FormDemo2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            studentName:'',
            age: '',
            course: 'html'
        }
    }
    handleChange = (event) =>{
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]:value
        })
    }
    handleSubmit = (event) => {
        alert('Thong tin SV ki Submit' + this.state.studentName + "" + this.state.age + "-" + this.state.course);
        event.preventDefault();
    }
  render() {
    return (
      <div className='alert alert-danger'>
        <h1>Ket hop nhieu thanh phan</h1>
        <form onSubmit={this.handleSubmit}>
            <label>
                Name: <input type='text' name='studentName'
                    value={this.state.studentName}
                    onChange={this.handleChange}
                />
            </label>
            <br />
            <label>
                Age: <input type='text' name='age'
                    value={this.state.age}
                    onChange={this.handleChange}
                />
            </label>
            <br />
            <label>
                Chon khoa hoc:
                <select value={this.state.course} name="course" onChange={this.handleChange}>
                    <option value="html">HTML</option>                     
                    <option value="CSS">CSS</option>                     
                    <option value="JS">JS</option>                     
                    <option value="react">react</option>                     
                </select>
            </label>
            <br />
            <input type='submit' value="submit"/>
        </form>
      </div>
    )
  }
}
