import React from 'react';
import ReactDOM from 'react-dom';

let key = 0;

const todo1 = 'eat lunch';
const todo2 = 'make the bed';
const todo3 = 'code';
const todos = [todo1, todo2, todo3];
const todoItems = todos.map(todo => <li key={key++}>{todo}</li> );

function todoList(td){
  return(
    <ul>
      {td}
    </ul>
  )
}

ReactDOM.render(
  todoList(todoItems)
  , document.getElementById('root')
);
