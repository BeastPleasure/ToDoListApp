import React from 'react';
import './TodoList.css';

const TodoList = ({todos, handleEdit, handleDelete}) => {
  return (
    
    <ul className="alltodoelements">

          {
            todos.map((t) => (
              <li className="singleelementrow">
                <span className="todotext" key={t.id}> {t.todo} </span>
                <button onClick={() => handleEdit(t.id)}> Edit </button>
                <button onClick={() => handleDelete(t.id)}> Delete </button>
              </li>
            ))
          }

    </ul>

  );
}

export default TodoList;