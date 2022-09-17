import React from 'react';
import { useContext } from 'react';
import AppContext from '../context/AppContext';

export default function Todo() {
  const { toDoList, task, setTask, setToDoList } = useContext(AppContext);

  const handleInputChange = ({ target }) => {
    setTask(target.value)
  };

  const handleSubmit = () => {
    console.log('Clicou');
    setToDoList([task, ...toDoList]);
  };

  return (
    <div>
      <h1>My To-Do List ✨</h1>
      <label htmlFor='task'>
        Tarefa:
      <input
      type='text'
      name='task'
      onChange={ handleInputChange }
      >
      </input>
      </label>
      <br />
      <button
      type="button"
      onClick={ handleSubmit }>
        Adicionar
      </button>
      <div>
      {
      toDoList.map((todo) => { return <p key={ todo }>{ todo }</p>})
      }
      </div>
    </div>
  )
}