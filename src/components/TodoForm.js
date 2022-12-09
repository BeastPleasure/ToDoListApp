import React from 'react';
import './TodoForm.css';

const TodoForm = ({ handleSubmit, todo, editId, setTodo}) => {
  return (
   
    <form className="todoform" onSubmit={handleSubmit}>

    <input type="text" 
            placeholder="What Do You Plan To Do?!" 
            value={todo}
            onChange={(e) => setTodo(e.target.value)}/>

    <button type="submit"> {editId? "Edit" : "Add"} </button>

  </form>

    );

};

export default TodoForm;