import React, { Component } from 'react';
import FirstComponent from './components/learning-examples/FirstComponent'
import SecondComponent from './components/learning-examples/SecondComponent'
import ThirdComponent from './components/learning-examples/ThirdComponent'
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

export default App;
