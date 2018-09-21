import React, { Component } from 'react';
import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer';

class App extends Component {
  state = {} 
  render() {
    return (
      <div className="todo_wrap">
        <Header />
        <TodoList />
        <Footer />
      </div>
    );
  }
}

export default App;
