import React from 'react';
import "./ToDo.css";

function ToDo({text, todo, todos, setTodos}) {

  function deleteTask(){
    setTodos(todos.filter((el) => el.id !== todo.id));
  }

  function completeTask(){
    setTodos(todos.map((item) => {
      if(item.id === todo.id){
        return {
          ...item, completed: !item.completed
        };
      }
      return item;
    }));
  }

  return (
    <div className="ToDo">
      <li className={`to-do-item ${todo.completed ? "completed" : ''}`}>{text}</li>
      <button onClick={completeTask} className="complete-btn">
        <i  className="fas fa-check"></i>
      </button>
      <button onClick={deleteTask} className="trash-btn">
        <i  className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default ToDo;
