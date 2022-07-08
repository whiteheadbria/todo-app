import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component  {
  render() {
  return (
    <div className="App">
      My Hello World
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
    </div>
  );
}
}

class FirstComponent extends Component  {
  render() {
  return (
    <div className="FirstComponent">
      First Component
    </div>
  );
}
}

class SecondComponent extends Component {
  render () {
    return (
      <div className="SecondComponent">
        Second Component
      </div>
    )
  }
}

function ThirdComponent() {
  return (
    <div className="ThirdComponent">
      Third Component
    </div>  
  );
}
export default App;
