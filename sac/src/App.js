import React, {useEffect, useState} from 'react';
import './App.css';
import Home from './components/Home';
import Aboutus from './components/Aboutus';
import Contactus from './components/Contactus';

function App() {
  return (
    <div className="App">
      <Home></Home>
      <Aboutus></Aboutus>
      <Contactus></Contactus>
    </div>
  );
}

export default App;
