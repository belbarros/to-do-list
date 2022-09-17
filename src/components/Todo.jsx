import React from 'react';
import { useContext } from 'react';
import AppContext from '../context/AppContext';

export default function Todo() {
  const { toDoList, task, setTask, setToDoList } = useContext(AppContext);

  const handleInputChange = ({ target }) => {
    setTask(target.value)
  };

  const handleSubmit = () => {
    setToDoList([task, ...toDoList]);
    setTask('');
  };

  return (
    <div>
      <h1>My To-Do List ✨</h1>
      <label htmlFor='task'>
        Tarefa:
      <input
      type='text'
      name='task'
      value={ task }
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
      toDoList.map((todo) => { return (
      <p key={ todo }>
        <label>
          <input type="checkbox" />
          { todo }
          </label>
          </p>
          )
        })
      }
      </div>
    </div>
  )
}