import React, { Component } from 'react'
import Student from './Student'

export default class ListStudent extends Component {
    constructor(props) {
        super(props);
    }

    // Hàm xử lý sự kiện xem
    handleViewOrEdit = (toggle,student,actionName)=>{
        console.log("List student view:",toggle);
        
        this.props.onHandleViewOrEdit(toggle,student,actionName);
    }
    render() {
        let { renderStudents } = this.props;
        console.log(renderStudents)
        let elementStudent = renderStudents.map((student, index) => {
            return (
                <Student
                    key={index}
                    renderStudent={student}
                    stt={index + 1}

                    onHandleViewOrEdit={this.handleViewOrEdit}
                />
            );
        }
        )
        return (
            <div>
                <div className="card-body">
                    <h3 className="card-title">Danh sách sinh viên</h3>
                    <div className="table-responsive pt-3">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Mã sinh viên</th>
                                    <th>Tên sinh viên</th>
                                    <th>Tuổi</th>
                                    <th>Giới tính</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {elementStudent}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        )
    }
}
