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
import User from './components/User';
import Counter from './components/Counter';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';

class App extends Component {
  
  render() {
  return (
    <div className="App">
   
     {/* <UserProvider value="Ridhi">  */}
      <ComponentC />
      {/* </UserProvider> */}
      {/* <Counter> 
        { (count, incrementCount) => 
        (<ClickCounter2 count={count} incrementCount={incrementCount} />
        ) }
         
         </Counter> */}
          {/* <Counter>
            { (count, incrementCount) => 
        (<HoverCounter2 count={count} incrementCount={incrementCount} />
        ) }
        </Counter> */}
  
      {/* <ClickCounter2 />
      <HoverCounter2 />
      <User render={ (isLoggedIn) => isLoggedIn ? 'Ridhi' : 'Guest'}/> */}
      {/* <ClickCounter name='Ridhi'/>
      <HoverCounter /> */}
    </div>
  )
}
}

export default App
