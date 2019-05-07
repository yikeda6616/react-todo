import React from 'react';

const TodoForm = props => {
  return (
    <form className='panel-block' onSubmit={props.addTodo}>
      <input
        className='input'
        type='text'
        value={props.item}
        onChange={props.updateItem}
      />
      <input className='button is-primary' type='submit' value='Add Todo' />
    </form>
  );
};

export default TodoForm;
