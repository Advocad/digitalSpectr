import React, { useState } from "react";
import style from "./style.css";


import CreateModal from "./CreateModal";
import Todo from "./Todo";

const initialState = [
  {id: 1, text:'dom', complete: false},
  {id: 2, text:'dom2', complete: false},
  {id: 3, text:'dom3', complete: false}
]
const App = () => {
  const [todos, setTodos] = useState(initialState)

  const handleChange = id => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, complete: !todo.complete} : todo ).sort((a,b) => a.complete - b.complete))
  }

  const handleSubmit = (data, select) => {
    
    if(select !== 'Главная'){
      const newData = todos.map(todo => {
        if(todo.id === +select) {
          return {...todo, children: [data]}
        }
        return todo
      })
      return setTodos(newData)
    } 
    setTodos([data, ...todos ])
  }

  const handleDelete = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  
  return (
    <div className="App">
      <h1>ToDo</h1>
      <Todo 
        handleDelete={handleDelete} 
        todos={todos} 
        handleChange={handleChange} 
      />
      <CreateModal 
        handleSubmit={handleSubmit} 
        todos={todos} 
      />
    </div>
  );
}

export default App;