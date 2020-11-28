import React, { Component } from 'react'
import Header from './components/header/Header'
import Todos from './components/todos/Todos'
import Addtodo from './components/addtodo/Addtodo'

class App extends Component {
  render() {
   return ( 
       <div className="App">
        <Header />
        <Addtodo />
        <Todos /> 
      </div> 
    )  
  }    
}

export default App;
