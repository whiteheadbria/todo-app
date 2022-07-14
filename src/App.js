import React, { Component } from 'react';
import FirstComponent from './components/learning-examples/FirstComponent'
import SecondComponent from './components/learning-examples/SecondComponent'
import ThirdComponent from './components/learning-examples/ThirdComponent'
import Counter from './components/counter/Counter'
import './App.css';

import logo from './logo.svg';
import './App.css';

class App extends Component  {
  render() {
  return (
    <div className="App">
    <Counter />
    <Counter by= {1} />
    <Counter by={2}/>
    <Counter by={3}/>
    </div>
  );
}
}


class LearningComponents extends Component {
  render() {
    return (
      <div className="LearningComponents">
        My Hello World
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent />
      </div>
    );
  }
}

export default App;
