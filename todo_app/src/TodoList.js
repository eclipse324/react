import React, { Component } from 'react';

class TodoList extends Component {
  render() {
    return (
      <section class="todo_list">
        <ul>
            <li>
              <input type="checkbox" id="" />
              할일1
            </li>
            <li>
              <input type="checkbox" id="" />
              할일2
            </li>
            <li>
              <input type="checkbox" id="" />
              할일3
            </li>
        </ul>
      </section>
    );
  }
}

export default TodoList;
