import React from 'react';
import '../styles/styles.css';
import {TODO} from "../model";
import SingleTodo from "./SingleTodo";

interface Props{
    todos: TODO[],
    setTodos: React.Dispatch<React.SetStateAction<TODO[]>>
}

const TodoList:React.FC<Props> = ({todos, setTodos}) => {
    return (
        <div className='todos'>
            {todos.map((todo) =>{
                return <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos}/>
            })}
        </div>
    );
};

export default TodoList;
