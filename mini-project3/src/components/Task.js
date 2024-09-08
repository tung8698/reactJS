import React from 'react'

function Task({renderTask, rollNo, onEdit}) {
    let elementLevel = <span className='label label-danger'>High</span>;
    if (renderTask.level === 2){
        elementLevel = <span className='label label-info'>Medium</span>;
    }else if (renderTask.level === 3){
        elementLevel = <span className='label label-default'>Small</span>;
    }
    const handleEdit = (toggle,actionName) =>{
        onEdit(toggle,actionName,renderTask);
    }

  return (
    <tr>
    <td className="text-center">{rollNo}</td>
    <td>{renderTask.taskName}</td>
    <td className="text-center">
        {elementLevel}
    </td>
    <td>
      <button type="button" className="btn btn-warning" onClick={()=>handleEdit(true,'Update')}>
        Edit
      </button>
      <button type="button" className="btn btn-danger" onClick={()=>handleEdit(false,'Delete')}>
        Delete
      </button>
    </td>
  </tr>
  )
}

export default Task
