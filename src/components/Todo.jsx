import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';

export default function Todo() {
  const { toDoList, task, setTask, setToDoList, doneList, setDoneList } = useContext(AppContext);

  const handleInputChange = ({ target }) => {
    setTask(target.value);
  };

  const handleSubmit = () => {
    setToDoList([task, ...toDoList]);
    setTask('');
  };

  const handleCheckChange = ({ target }) => {
      setDoneList([target.value, ...doneList]);
      const newList = toDoList.filter((todo) => todo !== target.value);
      setToDoList(newList);
  };

  const handleDeleteToDo = ({ target }) => {
    const newList = toDoList.filter((todo) => todo !== target.value);
    setToDoList(newList);
  }

  const handleReturn = ({ target }) => {
    const newTodoList = toDoList.concat(target.value);
    const newDoneList = doneList.filter((todo) => todo !== target.value);
    setToDoList(newTodoList);
    setDoneList(newDoneList);
  };


  const handleDeleteDone = ({ target }) => {
    const newList = doneList.filter((todo) => todo !== target.value);
    setDoneList(newList);
  }

  return (
    <div>
    <div className='header'>
      <h1>My To-Do List ✨</h1>
      <div className='input'>
      <label htmlFor='task'>
        Tarefa:
      <input
      type='text'
      name='task'
      value={ task }
      onChange={ handleInputChange }
      autoFocus
      >
      </input>
      </label>
      <br />
      <button
      type="button"
      onClick={ handleSubmit }>
        Adicionar
      </button>
      </div>
      </div>
    <div className='app-container'>
      <div className='todo-list'>
      <h1>To-Do</h1>
      <div>
      {
      toDoList.map((todo) => { return (
      <div className='todo-task'>
      <p key={ todo }>
          <button
          value={ todo }
          onClick={ handleCheckChange }>
          { todo }
          </button>
          <button
          className='delete-button'
          value={ todo }
          onClick={ handleDeleteToDo }
          > X
          </button>
          </p>
          </div>
          )
        })
      }
      </div>
      </div>
      <div className='done-list'>
      <h1>Finished Tasks</h1>
      {
      doneList.map((done) => (
      <div className='done-task'>
      <p key={ done }>
        <button
        value = { done }
        onClick={ handleReturn }
        >
        { done }
        </button>
        <button
         className='delete-button'
          value={ done }
          onClick={ handleDeleteDone }
          >
            X
          </button>
        </p>
        </div>
      ))
      }
      </div>
    </div>
    </div>
  )
}