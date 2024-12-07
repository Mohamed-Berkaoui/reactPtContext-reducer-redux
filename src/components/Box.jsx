import React, { useContext } from "react";
import { todosStore } from "../App";

function Box({ todo }) {
    const {dispatch}=useContext(todosStore)
    function handleUpdate(){
        dispatch({type:"UPDATE_TODO",payload: todo})
    }
    function handleDelete(){
        dispatch({type:"DELETE_TODO",payload: todo})
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
