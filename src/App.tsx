import React, { Component } from 'react';
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import Counter from './containers/Counter/Counter';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
       <Counter />
      </div>
    );
  }
}

export default App;
