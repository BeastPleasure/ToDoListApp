
import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {

  const [todo, setTodo] = useState("");

  const [todos, setTodos] = useState([]);

  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const editTodo = todos.find((h) => h.id === editId);
      const updatedTodos = todos.map((k) => 
        k.id === editTodo.id
        ?(k = {id: k.id, todo})
        :{id: k.id, todo: k.todo}
      );
      setTodos(updatedTodos);
      setEditId(0);
      setTodo("");
      return;
    }

    if (todo !== '') {
      setTodos([{id: `${todo}-${Date.now()}`, todo}, ...todos]);
      setTodo("");
    }

  };

  const handleDelete = (id) => {
    const delTodo = todos.filter((d) => d.id !== id);
    setTodos([...delTodo]);
  };

  const handleEdit = (id) => {
    const editTodo = todos.find((h) => h.id === id);
    setTodo(editTodo.todo);
    setEditId(id);
  };

  return (
    <div className="app">
      
      <div className="container">

        <h1> Todo List App </h1>

        <TodoForm
          handleSubmit = {handleSubmit}
          todo = {todo}
          setTodo = {setTodo}
          editId = {editId}/>

        <TodoList
          todos = {todos}
          handleEdit = {handleEdit}
          handleDelete = {handleDelete}/>

      </div>

    </div>
  );
}

export default App;
