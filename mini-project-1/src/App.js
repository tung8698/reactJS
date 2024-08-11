import React, { Component } from 'react'
import ListStudent from './components/ListStudent';
import Form from './components/Form';
import Control from './components/Control';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listStudent: [
        { studentId: "SV001", studentName: "Nguyễn Văn A", age: 20, sex: true, birthDate: "2002-04-23", birthPlace: "HN", address: "25, Vũ Ngọc Phan" },
        { studentId: "SV002", studentName: "Nguyễn Văn B", age: 21, sex: false, birthDate: "2001-09-09", birthPlace: "ĐN", address: "1, Ngô Quyền" },
        { studentId: "SV003", studentName: "Nguyễn Văn C", age: 19, sex: true, birthDate: "2003-07-07", birthPlace: "HCM", address: "1, Lý Tự Trọng" },
        { studentId: "SV004", studentName: "Nguyễn Văn D", age: 29, sex: false, birthDate: "2005-07-07", birthPlace: "HCM", address: "1, Lý Tự Trọng" },
  
      ],
      isToogle: false,
      student:"", // Doi tuong sv : xem, sua, xoa
      actionName:'' //trang thai cua Form cho truong hop them, sua, xoa

    }
  }
  handleSubmit = (toogle) => {
    this.setState({
      isToogle:toogle
    })
  }
//View
  handleView = (toogle,student,actionName) => {
    this.setState({
      isToogle:toogle,
      actionName:actionName
    })
    //Cap nhat doi tuong student
    this.setState({
      student:student
    })
  }

  handleAdd = (args,actionName) => {
    this.setState({
      isToogle:args,
      actionName:actionName
    })
  }
  render() {

    let elementForm = this.state.isToogle === true? <Form 
                          renderActionName={this.state.actionName}
                          renderStudent = {this.state.student}
                          onHandleSubmit = {this.handleSubmit}/> : ""


    let {listStudent} =this.state;
    return (
      <div className="row">
        <div className="col-lg-7 grid-margin stretch-card">
          <div className="card">
            <Control onHandleAdd={this.handleAdd}/>
            <ListStudent renderStudents = {listStudent}
            //truyen du lieu listStudent xuong Component ListStudent
                          onHandleView = {this.handleView}
            />
          </div>
        </div>
        {elementForm}
      </div>
        
    );
  }
}
