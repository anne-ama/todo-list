import { useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"


function App() {

  const [todos, setTodos] = useState([
    'Go to the gym',
    'Pick up the kids from school',
    'Eat more fruits'
  ])

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    setTodos(newTodoList)
  }

  return (
    <>
      <TodoInput handleAddTodo={handleAddTodos} />
      <TodoList todos={todos} />
    </>
  )
}

export default App
