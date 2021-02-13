import React from 'react';

function ToDoForm({inputFunction, inputValue, todos, setTodos, setStatus}) {

  function handleInput(event){
    inputFunction(event.target.value);
  }

  function handleToDoButton(event){
    event.preventDefault();
    setTodos([...todos, {text: inputValue, completed: false, id: Math.random() *1000},]);
    inputFunction("");
  }

  function handleStatus(event){
    setStatus(event.target.value);
  }

  return (
    <div>
      <form>
        <input type="Text" placeholder="Enter task" value={inputValue} onChange={handleInput} name="text" className="to-do-input" />
        <button type="submit" onClick={handleToDoButton} className="to-do-button"><i className="fas fa-plus"></i></button>
        <select onChange={handleStatus} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </form>
    </div>
  );
}

export default ToDoForm;
