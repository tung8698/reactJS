import React from 'react'

export default function EventDemo1() {

    //Ham xu ly su kien
    const eventHandleClick1 = () => {
        alert("eventHandleClick1 - Button01")
    }

    const eventHandleClick2 = () => {
        alert("eventHandleClick2 - Button02")
    }

    const eventHandleClick3 = (param) => {
        alert("Xin chao, \n" + param)
    }
  return (
    <div className='alert alert-info'>
    <h2>Event Demo</h2>
    <button onClick={eventHandleClick1()}>Button01</button>
    <button onClick={eventHandleClick2}>Button02</button>
    <button onClick={()=>eventHandleClick2}>Button02</button>
    <button onClick={()=>eventHandleClick3("Devmaster Academy")}>Button03</button>
    </div>
  )
}
