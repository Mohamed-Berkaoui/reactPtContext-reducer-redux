import React, { useContext, useRef } from 'react'
import { todosStore } from '../App'

function AddTodo() {
    const referance=useRef()
    const {setTodosState}=useContext(todosStore)
    function handleAddTodo(){
        var todo={task:referance.current.value,status:"pending",id:Math.floor(Math.random()*10)}
        setTodosState(function(state){
            return [...state,todo]
        })
    referance.current.value=""
    }
  return (
    <div className='add-todo'>
        <h2>add your todo</h2>
     <div >
        <input type="text" ref={referance} />
        <button onClick={handleAddTodo}> submit</button>

     </div>

    </div>
  )
}

export default AddTodo