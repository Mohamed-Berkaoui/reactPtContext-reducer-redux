import { useContext } from "react"
import Box from "./Box"
import "./todoscontainer.css"
import { todosStore } from "../App"

function TodoContainer() {

    const {todosState}=useContext(todosStore)
  return (
    <div className='todos-container'>
        {todosState.map(function(todo){return <Box todo={todo} />})}
    </div>
  )
}

export default TodoContainer