import React from 'react';
import ToDo from "./ToDo";

function ToDoList({todos, setTodos, filteredTodos}) {
  return (
    <div className="ToDoList">
      <ul className="to-do-list">
        {filteredTodos.map((todo) => (
          <ToDo text={todo.text} key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList
