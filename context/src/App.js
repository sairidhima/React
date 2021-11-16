import logo from './logo.svg';
import React, {Component } from 'react'
import './App.css';
import ReactDOM from 'react-dom';
import Hello from './components/Hello';
class App extends Component {
  
  render() {
  return (
    <div className="App">
    
    <Hello />


    </div>
    )
  }
  }
  
  export default App


  
  function Item(props) {
    return <li>{props.message}</li>;}
  
  function TodoList() {
    const todos = ['finish doc', 'submit pr', 'nag dan to review'];
    return (
      <ul>
        {todos.map((message) => <Item key={message} message={message} />)}    </ul>
    );
  }

 
// import {ThemeContext, themes} from './theme-context';
// import ThemedButton from './themed-button';

// // An intermediate component that uses the ThemedButton
// function Toolbar(props) {
//   return (
//     <ThemedButton onClick={props.changeTheme}>
//       Change Theme
//     </ThemedButton>
//   );
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       theme: themes.light,
//     };

//     this.toggleTheme = () => {
//       this.setState(state => ({
//         theme:
//           state.theme === themes.dark
//             ? themes.light
//             : themes.dark,
//       }));
//     };
//   }

//   render() {
//      return (
//       <page>
//         <ThemeContext.Provider value={this.state.theme}>        
//          <Toolbar changeTheme={this.toggleTheme} />       
//           </ThemeContext.Provider>    
//               <section>
//           <ThemedButton />     
//              </section>
//       </page>
//      );
//   }
// }

// ReactDOM.render(<App />, document.getElementById('root'));




// export default App; 