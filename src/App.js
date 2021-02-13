import React, {useState, useEffect} from "react";
import './App.css';
import ToDoForm from './ToDoList/ToDoForm';
import ToDoList from './ToDoList/ToDoList';

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() =>{
    handleFilters();
    saveLocalTodos();
  }, [todos, status]);

  function handleFilters(){
    switch(status){
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  function saveLocalTodos(){
      localStorage.setItem("todos", JSON.stringify(todos));
  }

  function getLocalTodos(){
    if (localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Charlotte's To do list</h1>
      </header>
      <main>
        <div className="container">
          <ToDoForm todos={todos} setTodos={setTodos} inputFunction={setInput} inputValue={input} setStatus={setStatus} />
          <ToDoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
        </div>
      </main>
      <footer>
        <p>Coded by Charlotte</p>
      </footer>  
    </div>
  );
}

export default App;
