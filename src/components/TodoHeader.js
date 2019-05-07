import React from 'react';

const TodoHeader = props => {
  const remaining = props.todos.filter(todo => {
    return !todo.isDone;
  });
  return (
    <h1 className='panel-heading'>
      My Todos
      <span>
        ({remaining.length}/{props.todos.length})
      </span>
      <button
        onClick={props.purge}
        className='button is-small is-danger is-outlined is-pulled-right'
      >
        <span>Purge</span>
        <span className='icon is-small'>
          <i className='fas fa-times' />
        </span>
      </button>
    </h1>
  );
};

export default TodoHeader;
