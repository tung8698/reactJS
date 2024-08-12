import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props){
        super(props);
        this.state={
            studentId: "", 
            studentName: "",
            age:0,
            sex: true, 
            birthDate: "", 
            birthPlace: "", 
            address: "",
            actionName:""
        }
    }
  
    componentWillMount = ()=>{
        let {renderStudent,renderActionName} = this.props;
        if(renderActionName==="Save"){

        }else{
            this.setState({
                studentId: renderStudent.studentId, 
                studentName: renderStudent.studentName,
                age:renderStudent.age,
                sex: renderStudent.sex, 
                birthDate: renderStudent.birthDate, 
                birthPlace: renderStudent.birthPlace, 
                address: renderStudent.address,
                actionName:renderActionName
            })
        }
        
    }

    componentWillReceiveProps = (nextProps)=>{
        let {renderStudent,renderActionName} =nextProps;
        if(renderActionName==="Save"){

        }else{
            this.setState({
                studentId: renderStudent.studentId, 
                studentName: renderStudent.studentName,
                age:renderStudent.age,
                sex: renderStudent.sex, 
                birthDate: renderStudent.birthDate, 
                birthPlace: renderStudent.birthPlace, 
                address: renderStudent.address,
                actionName:renderActionName
            })
        }
    }
    // Hàm xử lý sự kiện khi thay đổi dữ liệu trên các điều khiển của form
    // Cập nhật lại state
    handleChange = (event)=>{
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]:value,
        })
    }
    // Hàm xử lý khi submit form
    handleSubmit = (event)=>{
        event.preventDefault();
        // thêm, sửa , xóa


        // close
        this.props.onHandleSubmit(false);

    }
    render() {
        // lấy dữ liệu từ props => hiển thị lên các điều khiên trên form
        let {renderStudent,renderActionName} = this.props;

        return (
            <>
                <div className="col-5 grid-margin">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">Thông tin sinh viên</h3>
                            <form className="form-sample">
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Mã sinh viên</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" 
                                            name='studentId'
                                            value={this.state.studentId}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Tên sinh viên</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" 
                                            name='studentName'
                                            value={this.state.studentName}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Tuổi</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" 
                                            name='age'
                                            value={this.state.age}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Giới tính</label>
                                    <div className="col-sm-9">
                                        <select className="form-control" 
                                            name='sex'
                                            value={this.state.sex}
                                            onChange={this.handleChange}
                                            >
                                            <option value={true}>Nam</option>
                                            <option value={false}>Nữ</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Ngày sinh</label>
                                    <div className="col-sm-9">
                                        <input className="form-control" placeholder="dd/mm/yyyy" 
                                            name='birthDate'
                                            value={this.state.birthDate}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Nơi sinh</label>
                                    <div className="col-sm-9">
                                        <select className="form-control" 
                                            name='birthPlace'
                                            value={this.state.birthPlace}
                                            onChange={this.handleChange}
                                        >
                                            <option value={'HN'}>Hà Nội</option>
                                            <option value={'HCM'}>TP. Hồ Chí Minh</option>
                                            <option value={'ĐN'}>Đà Nẵng</option>
                                            <option value={'QN'}>Quảng Ninh</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Địa chỉ</label>
                                    <div className="col-sm-9">
                                        <textarea className="form-control" 
                                            name='address'
                                            value={this.state.address}
                                            onChange={this.handleChange}
                                            />

                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary me-2" 
                                    onClick={(event)=>this.handleSubmit(event)}>
                                    {renderActionName}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </>

        )
    }
}
