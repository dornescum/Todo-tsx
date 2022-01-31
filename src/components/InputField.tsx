import React, {useRef, useState} from 'react';
import '../styles/styles.css';
import {MdOutlineAddTask} from 'react-icons/md';

interface Props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({todo, setTodo, handleAdd}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (<form className='input'
                  onSubmit={(e) => {
                      handleAdd(e);
                      inputRef.current?.blur();
                  }}>
        <input type="input" placeholder='Enter a task' className='input__box' ref={inputRef}
               value={todo} onChange={(e) => {
            setTodo(e.target.value)
        }}/>
        <button className='input_submit' type='submit'>
            <MdOutlineAddTask  />
        </button>
    </form>);
};

export default InputField;
