import React, { useEffect, useState } from 'react'
import axiosMockApi from '../api/mock-api'

export default function MockUsers() {
    const [users, setUsers] = useState([]);
    //hàm call data từ API
    useEffect(()=>{
        getAllUsers();
        console.log("Users Mock:", users);
        
    },[])
    const  getAllUsers = async()=>{
        // gọi api để lấy data
        const resp = await axiosMockApi.get("users");
        setUsers(resp.data)
    }
    //render data to element
    const elementUsers = users.map((item,index)=>{
        return (
            <>
                <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.fullname}</td>
                    <td>{item.age}</td>
                    <td>{item.gender}</td>
                    <td>
                        <a href='/#' className='btn btn-success mx-1'>Edit</a>
                        <a href='/#' className='btn btn-danger mx-1'>Delete</a>
                    </td>
                </tr>
            </>
        )
    })
    
  return (
    <div>
      <table className='table table-bordered'>
        <thead>
            <tr>
                <th>Id</th>
                <th>FullName</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {elementUsers}
        </tbody>
       </table>
    </div>
  )
}
