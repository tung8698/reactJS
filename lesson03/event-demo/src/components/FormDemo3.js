import React, { Component } from 'react'

export default class FormDemo3 extends Component {
    //B2: to chuc state
    constructor(props){
        super(props);
        this.state = {
            studentName: '',
            age:0,
            course:'',
        }
    }
    //B3:
    handleChange = (ev) =>{
        //lay ten dieu khien tren form
        let name = ev.target.name
        // lay value
        let value = ev.target.value
        //Cap nhat state
        this.setState({
            [name]:value
        })
    }
    //B4
    handleSubmit = (event) =>{
        event.preventDefault();
        //Chuyen len app
        this.props.onSubmit(this.state);
    }
  render() {

    //B1: thiet ke form
    return (
      <div className='alert alert-danger'>
        <h1>Ket hop nhieu thanh phan</h1>
        <form>
  <div className="mb-3">
    <label htmlFor="studentName" className="form-label">
      Name
    </label>
    <input
      type="text"
      className="form-control"
      id="studentName"
      name='studentName'
      value={this.state.studentName}
      onChange={this.handleChange}
    />
  </div>
  <div className="mb-3">
    <label htmlFor="age" className="form-label">
      Age
    </label>
    <input
      type="text"
      className="form-control"
      id="age"
      name='age'
      value={this.state.age}
      onChange={this.handleChange}
    />
  </div>
  <div className="mb-3">
  <label htmlFor="course" className="form-label">
    Course
  </label>
  <select id="course" className="form-select"
            name='course'
            value={this.state.course}
            onChange={this.handleChange}>
    <option value={'html5'}>HTML5</option>
    <option value={'CSS3'}>CSS3</option>
    <option value={'JS'}>JavaScript</option>
    <option value={'react'}>React</option>
  </select>
</div>

  <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>
    Submit
  </button>
</form>

        
      </div>
    )
  }
}
