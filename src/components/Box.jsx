import React, { useContext } from "react";
import { todosStore } from "../App";

function Box({ todo }) {
    const {setTodosState}=useContext(todosStore)
    function handleUpdate(){
        setTodosState(function(state){return state.map(element=>element.id==todo.id? {...element,status:element.status=="done"?"pending":"done"}:element)})
    }
    function handleDelete(){
        setTodosState(function(state){
            return state.filter(element=>element.id==todo.id?false:true)
        })
    }
  return (
    <div className="todo">
      <h4>{todo.task}</h4>
      <p>{todo.status} </p>
      <div>
        <button onClick={handleUpdate}>update status</button>
        <button onClick={handleDelete}>delete</button>
      </div>
    </div>
  );
}

export default Box;
