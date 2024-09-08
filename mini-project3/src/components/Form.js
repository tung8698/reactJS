import React, { useEffect, useState } from 'react'

function Form({onCancel,actionName,renderTask,onSubmit}) {
    const handleCancel = () =>{
        onCancel(false)
    }

    const [task, setTask] = useState(renderTask)

    useEffect(() => setTask(renderTask),[renderTask]);

    const handleChange = (event) => {
        let name = event.target.name
        let value = event.target.value
        if (name==='level'){
            value = parseInt(value)
        }
        setTask(task => {
            return {
                ...task,
                [name]:value
            }
        })
    }

    const handleSubmit = () => {
        onSubmit(false,actionName,task)
    }

  return (
    <div className="col-md-offset-7 col-md-5">
    <form action="" method="POST" className="form-inline">
      <div className="form-group">
        <label className="sr-only" htmlFor="">
          label
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Task Name"
          name="taskName"
          value={task.taskName || ''}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label className="sr-only" htmlFor="">
          label
        </label>
        <select
          name="level"
          id="inputDs"
          className="form-control"
          required="required"       
          value={task.level || 2}
          onChange={handleChange}
        >
          <option value={3}>Small</option>
          <option value={2}>Medium</option>
          <option value={1}>High</option>
          
        </select>
      </div>
      <button type="button" className="btn btn-primary" onClick={handleSubmit}>
        {actionName}
      </button>
      <button type="button" className="btn btn-default" onClick={handleCancel}>
        Cancel
      </button>
    </form>
  </div>
  )
}

export default Form
