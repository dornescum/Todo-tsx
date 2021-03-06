import React, {useState} from 'react';
// import logo from './logo.svg';
import './styles/App.css';
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import {TODO} from "./model";


const App:React.FC =()=> {
  const [todo, setTodo] =useState<string>('');
  const [todos, setTodos] =useState<TODO[]>([]);
  console.log(todos)

  const handleAdd=(e:React.FormEvent)=>{
    e.preventDefault();
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
    if (todo){
      setTodos([...todos, {
        id:Date.now(),
        todo: todo,
        isDone: false
      }])
      setTodo('');
    }
  }

  return (
    <div className="App">
    <span className='heading'> Taskify </span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
