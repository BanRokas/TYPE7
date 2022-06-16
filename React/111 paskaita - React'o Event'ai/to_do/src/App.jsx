import './App.css';
import ToDo from './components/ToDo';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

const App = () => {

  const [todos, setTodos] = useState([
    {
      id : 0,
      title : "Pasiklausyti Tomašo bajerių"
    }, {
      id : 1,
      title : "Išgerti arbatos"
    }, {
      id : 2,
      title : "Papildyti cukraus atsargas"
    }
  ]);
  // const [todoInputValue, setTodoInputValue] = useState('');

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  // const handleTask = (e) => {
  //   setTodoInputValue(e.target.value);
  //   console.log(todoInputValue);
  // }

  const addTodo = e => {
    e.preventDefault();
    setTodos(todos.concat([{
      id: uuid(),
      title: e.target.elements.todo.value
    }]));
    e.target.elements.todo.value = null;
  }

  return (
    <div className="app">
      <div className="todoAPP">
        <div className="todoTitle">
          <h1>You have {todos.length} Todos</h1>
        </div>
        <div className="todoList">
          {
            todos.map(todo => {
              return <ToDo 
                key = {todo.id}
                data = {todo}
                handleDelete = {handleDelete}
              />
            })
          }
        </div>
        <div className="addTodoForm">
          <form onSubmit={addTodo}>
            <input type="text" /*value={todoInputValue} onChange={handleTask}*/ placeholder="Enter Item" name="todo" />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
