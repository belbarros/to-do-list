import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

export default function Todo() {
  const { toDoList, task, setTask, setToDoList, doneList, setDoneList } = useContext(AppContext);

  const handleInputChange = ({ target }) => {
    setTask(target.value)
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

  const handleDeleteDone = ({ target }) => {
    const newList = doneList.filter((todo) => todo !== target.value);
    setDoneList(newList);
  }

  return (
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
    <div className='app-container'>
      <div className='todo-list'>
      <h1>To-Do</h1>
      <div>
      {
      toDoList.map((todo) => { return (
      <div className='todo-task'>
      <p key={ todo }>
        <label>
          <input
          type="checkbox"
          value={ todo }
          onChange={ handleCheckChange }
          />
          { todo }
          </label>
          </p>
          <button
          value={ todo }
          onClick={ handleDeleteToDo }
          >
            Delete
          </button>
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
        <label>
          <input
          className='check'
          type="checkbox"
          checked='true'
          value={ done }
          />
        { done }
        </label>
        </p>
        <button
          value={ done }
          onClick={ handleDeleteDone }
          >
            Delete
          </button>
        </div>
      ))
      }
      </div>
    </div>
    </div>
  )
}