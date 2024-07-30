
import './App.css';
import EventDemo1 from './components/EventDemo1';
import EventDemo2 from './components/EventDemo2';
import EventDemo3 from './components/EventDemo3';
import EventDemo4 from './components/EventDemo4';
import FormDemo1 from './components/FormDemo1';
import FormDemo2 from './components/FormDemo2';
import FormDemo3 from './components/FormDemo3';
import ListObjectRender from './components/ListObjectRender';
import ListRender from './components/ListRender';

function App() {

  //Ham nhan du lieu tu demo3 va xu li
  const handleReciver = (param) => {
    alert("xin chao," + param)
  }
  const handleSubmit = (args, val) =>{
    alert(args+ "\n" + val)
  }
  const handleSubmitForm3 = (params) =>{
    console.log(params);
    alert(params)
  }
  return (
    <div className="container border my-3">
      <header className="">
        <img src='https://devmaster.edu.vn/images/logo.png' className="" alt="Devmaster Academy" />

      </header>
      <EventDemo1 />
      <EventDemo2 />
      <EventDemo3 renderCompany = "abifd" onReciver = {handleReciver}/>
      <EventDemo4 onSubmit={handleSubmit}/>
      <hr />
      <FormDemo1 />
      <FormDemo2 />
      <FormDemo3 onSubmit = {handleSubmitForm3}/>
      <ListRender />
      <ListObjectRender />
    </div>
  );
}

export default App;
