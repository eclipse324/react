import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="count">
          <span className="todo_counter">3</span>
          <span>items left</span>
        </div>
        <span className="all">All</span>
        <span className="active">Active</span>
        <span className="completed">Completed</span>
        <span className="end_item">Clear completed</span>
      </footer>
    );
  }
}

export default Footer;
