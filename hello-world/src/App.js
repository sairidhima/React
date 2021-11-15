import React, {Component } from 'react'
import logo from './logo.svg';
import './App.css';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';

class App extends Component {
  render() {
  return (
    <div className="App">
      <PortalDemo />
     {/* <FRParentInput /> */}
     {/* <FocusInput /> */}
      {/* <RefsDemo /> */}
    </div>
  )
}
}

export default App
