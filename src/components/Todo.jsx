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

  return (
    <div className='app-container'>
      <div className='todo-list'>
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
      <div className='done-list'>
      {
      toDoList.map((todo) => { return (
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
          )
        })
      }
      </div>
      </div>
      <div>
      <h1>Finished Tasks ✨</h1>
      {
      doneList.map((done) => <p key={ done }>{ done }</p>)
      }
      </div>
    </div>
  )
}