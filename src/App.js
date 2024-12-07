import './App.css';
import { createContext, useReducer, useState } from 'react';
import TodoContainer from './components/TodoContainer';
import AddTodo from './components/AddTodo';


export const todosStore=createContext()
export function addTodoAction(param){
  return {type:"ADD_TODO",payload:param}
}

function reducer(state,action){//{type:"jklsdlfkh",paylod:{}}
  if(action.type=="ADD_TODO"){
    return [...state,action.payload]
  }
  else if(action.type=="UPDATE_TODO"){
    //  return state.map(element=>element.id==todo.id? {...element,status:element.status=="done"?"pending":"done"}:element)})
   var newState=[]
    for (let i = 0; i < state.length; i++) {
      if(state[i].id==action.payload.id){
        const oldStatus=state[i].status
        newState.push({...state[i],status:oldStatus=="done"?"pending":"done"})
 
      }
      else{
        newState.push(state[i])
      }
      
  }
  return newState
}
else if(action.type=="DELETE_TODO"){
  //    return state.filter(element=>element.id==todo.id?false:true)
  const newState=[]
  for (let i = 0; i < state.length; i++) {
    if(state[i].id!=action.payload.id){
      newState.push(state[i])
    }
    
  }
return newState
}}
function App() {

  const todos=[{task:"task 1" ,status:"done",id:1},{task:"task 2" ,status:"pending",id:2}]
 const [todosState,dispatch]=useReducer(reducer,todos)

  return (
    <todosStore.Provider value={{todosState,dispatch}}>
    <div className="App">
      <TodoContainer />
      <AddTodo/>
    </div>
    </todosStore.Provider>
  );
}

export default App;
