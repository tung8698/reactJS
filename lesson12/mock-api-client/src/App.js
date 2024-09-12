import logo from './logo.svg';
import './App.css';
import LocalUsers from './components/LocalUsers';
import MockUsers from './components/MockUsers';

function App() {
  return (
    <div className="container my-3 border">
      <h1>Call Api su dung axios</h1>
      <hr/>
      <div className="alert alert-danger">
        <h2>Call Api voi JSON server Local</h2>
        <LocalUsers />
      </div>
      <div className="alert alert-info">
        <h2>Call Api voi Mock API</h2>
        <MockUsers />
      </div>
    </div>
  );
}

export default App;
