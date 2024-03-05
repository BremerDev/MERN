import { useState, useEffect } from 'react';
import { NewToDoForm } from './NewToDoForm';
import { ToDoList } from './ToDoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const loadTodos = async () => {
      // ...
    }

    loadTodos();
  }, []);

  const createTodo = todoText => {
    // ...
  }

  const completeTodo = todoId => {
    // ...
  }

  const deleteTodo = todoId => {
    // ...
  }

  return (
    <div>
      <h1>ToDo</h1>
      <NewToDoForm onClickCreate={createTodo} />
      <ToDoList
        todos={todos}
        onCompleteTodo={completeTodo}
        onDeleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
