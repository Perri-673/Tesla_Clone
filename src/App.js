import logo from './logo.svg';
import './App.css';
import React, { Component }  from 'react';
import Header from "./components/Header"
import Home from "./components/Home"

function App() {
  return (
    <div className="App">
      <Header /> 
      <Home />
      
    </div>
  );
}

export default App;
