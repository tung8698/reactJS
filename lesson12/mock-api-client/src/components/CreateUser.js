import React, { useState } from 'react'
import axiosMockApi from '../api/mock-api'

export default function CreateUser() {
    //state
    const [fullname, setFullName] = useState('')
    const [age, setAge] = useState(0)
    const [gender, setGender] = useState(true)

    const handleSubmit = (event)=>{
        event.preventDefault();
        let user = {
            "fullname": fullname,
            "age": age,
            "gender": gender,
             "id": "d79b"
        }
        console.log("Users post:",user);
        
    }

  return (
    <div>
      <form>
        <div>
            FullName:
            <input type='text' name='fullName' value={fullname} onChange={(ev)=>setFullName(ev.target.value)}/>
        </div>
        <div>
            Age:
            <input type='number' name='age' value={fullname} onChange={(ev)=>setAge(ev.target.value)}/>
        </div>
        <div>
            Gender:
            <input type='text' name='gender' value={fullname} onChange={(ev)=>setGender(ev.target.value)}/>
        </div>
      </form>
    </div>
  )
}
