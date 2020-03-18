import React, { Component } from 'react'
import { connect } from 'react-redux';

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map(todo => {
        return (
          <li key={todo.id}>
            <a href="#">{todo.text}</a>
          </li>
        );
      })}
    </ul>
  );
};
const mapStateToProps = (state) => ({
    todos: state.todos
});

export default connect(
  mapStateToProps
)(TodoList);