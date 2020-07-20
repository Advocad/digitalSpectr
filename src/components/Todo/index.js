import React from 'react'
import cn from 'classnames'
import style from "./style.css";

import { Checkbox, Button } from 'antd';

const Todo = ({handleDelete, todos, handleChange}) => {
  return (
    <div className="todos">
      {todos.map(todo => (
       <div className="todo" key={todo.id}>
          <Checkbox  onChange={() => handleChange(todo.id)}>
            <span className={cn({'check': todo.complete})}>{todo.text}</span>
          </Checkbox>
          {todo.complete && <Button onClick={() => handleDelete(todo.id)} type="link">Удалить</Button>}
          {todo.children && todo.children.map( item =>
            <div className="children" key={item.id}>
              <Checkbox  onChange={() => handleChange(item.id)}>{item.text}</Checkbox>
              {item.complete && <Button onClick={() => handleDelete(item.id)} type="link">Удалить</Button>}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Todo;