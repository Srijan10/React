import './App.css';
import React, { Component } from 'react';
import HookCounterTwo from './components/HookCounterTwo'
import CounterOneClass from './components/CounterOneClass';
import HookCounterOneUse from './components/HookCounterOneUse';
import ClassMouse from './components/ClassMouse';
import HookMouse from './components/HookMouse';


class App extends Component{
  render(){
    return(
      <div className="App">
        {/* <ClassMouse/> */}
        <HookMouse/>
      </div>
    );
  }
}

export default App;
