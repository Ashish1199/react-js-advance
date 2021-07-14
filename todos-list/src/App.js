//Basic imports
import './App.css';
import React from 'react';
import Nav from './MyComponent/nav.js'
import Footer from './MyComponent/footer.js'
import Todos from './MyComponent/todos.js'
import todos from './MyComponent/todoItem.js'

//CSS




function App() {
  return <React.Fragment>
      <Nav title="Ashish Todo" searchBar={true}/>
      <Todos items={todos}/>
      <Footer/>
  </React.Fragment>
  
}

export default App;
