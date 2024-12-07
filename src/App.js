import './App.css';
import { createContext, useState } from 'react';
import TodoContainer from './components/TodoContainer';
import AddTodo from './components/AddTodo';


export const todosStore=createContext()

function App() {

  const todos=[{task:"task 1" ,status:"done",id:1},{task:"task 2" ,status:"pending",id:2}]
  const [todosState,setTodosState]=useState(todos)
  return (
    <todosStore.Provider value={{todosState,setTodosState}}>
    <div className="App">
      <TodoContainer />
      <AddTodo/>
    </div>
    </todosStore.Provider>
  );
}

export default App;
