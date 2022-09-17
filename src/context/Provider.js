import React, { useState } from 'react';
import AppContext from './AppContext';

function Provider({ children }) {
  const [toDoList, setToDoList] = useState([]);
  const [doneList, setDoneList] = useState([]);
  const [task, setTask] = useState('');

  const contextValue = { toDoList, setToDoList,task, setTask, doneList, setDoneList };

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}
export default Provider;