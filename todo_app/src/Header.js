import React, { Component } from 'react';

class Header extends Component {
   _addTodo = () => {   
     
  }

  
  render() {
    return (
      <header>
        <h1 className="header_titler">TODOS</h1>
        <div className="new_todo_input">
          <input type="text" id="new_todo" placeholder="What needs to be done?" />          
        </div>
      </header>
    );
  }
}

export default Header;
