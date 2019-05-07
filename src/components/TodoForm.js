import React from 'react';

const TodoForm = props => {
  return (
    <form className='panel-block' onSubmit={props.addTodo}>
      <input
        class='input'
        type='text'
        value={props.item}
        onChange={props.updateItem}
      />
      <input class='button is-primary' type='submit' value='Add Todo' />
    </form>
  );
};

export default TodoForm;
