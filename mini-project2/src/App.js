import React from 'react';
import './App.css';
import Title from './components/Title';
import Listproduct from './components/Listproduct';
import Cart from './components/Cart';

function App() {
  return (
    <div className="container">
      {/* TITLE : START */}
        <Title/>
      {/* TITLE : END */}
      <div className="row">
        {/* LIST PRODUCT : START */}
          <Listproduct/>
        {/* LIST PRODUCT : END */}
        {/* CART : START */}
        <Cart/>
        {/* CART : END */}
      </div>
    </div>

  );
}

export default App;
