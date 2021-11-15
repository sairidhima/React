import React, {Component } from 'react'
import logo from './logo.svg';
import './App.css';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounter2 from './components/ClickCounter2';
import HoverCounter2 from './components/HoverCounter2';

class App extends Component {
  
  render() {
  return (
    <div className="App">
      <ClickCounter2 />
      <HoverCounter2 />
      {/* <ClickCounter name='Ridhi'/>
      <HoverCounter /> */}
    </div>
  )
}
}

export default App
