import React, { Component } from 'react'

export default class Student extends Component {
  // xu li chuc nang xem thong tin
  handleView = (student,actionName) => {
    console.log("Student view click");

    this.props.onHandleView(true,student,actionName);
  }
  render() {
    let {key, renderStudent, stt} = this.props;
    return (
        <tr>
        <td>{stt}</td>
        <td>{renderStudent.studentId}</td>
        <td>{renderStudent.studentName}</td>
        <td>{renderStudent.age}</td>
        <td>{renderStudent.sex === true? "Nam" : "Nu"}</td>
        <td>
          <div className="template-demo">
            <button
              type="button"
              className="btn btn-danger btn-icon-text"
              onClick={()=>this.handleView(renderStudent,"Close")}
            >
              Xem
            </button>
            <button
              type="button"
              className="btn btn-warning btn-icon-text"
              onClick={()=>this.handleView(renderStudent,"Update")}
            >
              Sửa
            </button>
            <button
              type="button"
              className="btn btn-success btn-icon-text"
            >
              Xóa
            </button>
          </div>
        </td>
      </tr>
    )
  }
}
