
import { useEffect, useState } from 'react';
import './App.css';
import Control from './components/Control';
import Title from './components/Title';
import ListTask from './components/ListTask';
import Form from './components/Form';

function App() {
  const listTaskInit = [
    {taskId:1, taskName:"Lorem ipsum dolor sit amet,  Reiciendis ea a",level:1},
    {taskId:2, taskName:"Lorem ipsum dolor sit amet, Reiciendis ea b",level:2},
    {taskId:3, taskName:"Lorem ipsum dolor sit amet,  Reiciendis ea c",level:3},
    // {taskId:4, taskName:"Lorem ipsum dolor sit amet,  Reiciendis ea d",level:1},
  ]
  // cách 1 : lưu trữ data bằng UseState
  // const [task , setTasks] = useState(listTaskInit);

  // cách 2 : lưu trữ data bằng UseState
  const [tasks , setTasks] = useState(()=>{
    // đọc data từ localStorage hoặc API
    const list = JSON.parse(localStorage.getItem("DEV2407rj_TASKS"));
    if(list === null){
      return listTaskInit;
    }else{
      return list;
    }
  });

  //useEffect: khi task thay đổi thì cập nhật vào localStorage
  useEffect(()=>{
    localStorage.setItem("DEV2407RJ_TASK",JSON.stringify(tasks))
  },[tasks])
  //trạng thái ẩn hiện form
  const [isToggle, setIsToggle] = useState(false);
  const handleCancelForm = (toggle) => {
    setIsToggle(toggle)
  }

  const [task,setTask] = useState({taskId:0, taskName:"", level:2}) // State Form
    // trạng thái hiển thị giá trị của nút submit của form : Save(add)/ Update(Edit)
  const [actionName, setActionName] = useState('Save');
  const handleAddOrEditTask = (toggle, actionName, task) =>{
    setIsToggle(toggle);
    if(actionName !== 'Delete'){
      setActionName(actionName)
    }
    console.log(task);
    if(task === null){
      setTask({taskId:0,taskName:"",level:2})
    }else{
      setTask(task);
      //xử lý thêm mới
      if(actionName==='Save'){
        setTasks((pre)=>{
          pre.sort((x,y)=>{
            return x.taskId - y.taskId;
          });
          //lấy id lớn nhất của listTask + 1
          let id = pre.length <=0? 1: pre[pre.length -1].taskId +1;
          const taskAdd = {
            taskId: id,
            taskName: task.taskName,
            level: task.level
          };

          return [...pre,taskAdd]
        })
      }else if (actionName === 'Update'){
        setTasks((pre)=>{
          for(let i = 0; i< pre.length; i++){
            if(pre[i].taskId === task.taskId){
              pre[i] = task;
              break;
            }
          }
          return [...pre]
        })
      }else if (actionName === 'Delete'){
        setTasks((pre) => {
          pre = pre.filter((x)=>x.taskId !== task.taskId);
          return [...pre]
        })
      }
    }
  } 

  let elementForm = isToggle === true ? (<Form
    onCancel = {handleCancelForm}
    renderTask = {task}
    actionName = {actionName}
    onSubmit = {handleAddOrEditTask}
  />): ('');

  return (
<div className="container">
    {/* TITLE : START */}
      <Title/>
    {/* TITLE : END */}
    {/* CONTROL (SEARCH + SORT + ADD) : START */}
      <Control onAddTask={handleAddOrEditTask} />
    {/* CONTROL (SEARCH + SORT + ADD) : END */}
    {/* FORM : START */}
      {elementForm}
    {/* FORM : END */}
    {/* LIST : START */}
      <ListTask renderTasks={tasks} onEdit={handleAddOrEditTask} />
  </div>
  );
}

export default App;
