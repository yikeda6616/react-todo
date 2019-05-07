import React from 'react';

const TodoItem = props => {
  return (
    <a className='panel-block'>
      <label className='checkbox'>
        <input
          type='checkbox'
          checked={props.todo.isDone}
          onChange={() => {
            props.checkTodo(props.todo);
          }}
        />
        <span className={props.todo.isDone ? 'done' : ''}>
          {props.todo.title}
        </span>
      </label>

      <span
        className='cmd panel-icon'
        onClick={() => props.deleteTodo(props.todo)}
      >
        <i className='fas fa-trash-alt' />
      </span>
    </a>
  );
};

export default TodoItem;
