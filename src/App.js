import React from 'react';

import './App.scss';
import TodoForm from './components/TodoForm';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';

const todos = [];

const getUniqueId = () => {
  return new Date().getTime().toString(36) + '-' + Math.random().toString(36);
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todos,
      item: ''
    };

    this.checkTodo = this.checkTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.purge = this.purge.bind(this);
  }

  checkTodo(todo) {
    const todos = this.state.todos.map(todo => {
      return {
        id: todo.id,
        title: todo.title,
        isDone: todo.isDone
      };
    });

    const pos = this.state.todos
      .map(todo => {
        return todo.id;
      })
      .indexOf(todo.id);

    todos[pos].isDone = !todos[pos].isDone;
    this.setState({ todos: todos });
  }

  deleteTodo(todo) {
    if (!confirm('are you sure?')) {
      return;
    }
    const todos = this.state.todos.slice();
    const pos = this.state.todos.indexOf(todo);

    todos.splice(pos, 1);
    this.setState({
      todos: todos
    });
  }

  updateItem(e) {
    this.setState({
      item: e.target.value
    });
  }

  addTodo(e) {
    e.preventDefault();

    if (this.state.item.trim() === '') {
      return;
    }

    const item = {
      id: getUniqueId(),
      title: this.state.item,
      isDone: false
    };

    const todos = this.state.todos.slice();
    todos.push(item);
    this.setState({
      todos: todos,
      item: ''
    });
  }

  purge() {
    if (!confirm('are you sure?')) {
      return;
    }

    const todos = this.state.todos.filter(todo => !todo.isDone);

    this.setState({
      todos: todos
    });
  }

  componentDidUpdate() {
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  }

  componentDidMount() {
    this.setState({
      todos: JSON.parse(localStorage.getItem('todos')) || []
    });
  }

  render() {
    return (
      <div className='container'>
        <div className='columns is-centered'>
          <div className='panel column is-half'>
            <TodoHeader todos={this.state.todos} purge={this.purge} />
            <TodoList
              checkTodo={this.checkTodo}
              deleteTodo={this.deleteTodo}
              todos={this.state.todos}
            />
            <TodoForm
              item={this.state.item}
              updateItem={this.updateItem}
              addTodo={this.addTodo}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
