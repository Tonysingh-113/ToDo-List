import React from 'react'
import TodoItem from './TodoItem'

const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh",
  }

  return (
    <div className='container my-3' style={myStyle}>
      <h2 className=' my-3'>Todos List</h2>
      {props.todos.length === 0 ? <h5>No Todos to Display</h5> :
        props.todos.map((todo) => {
          return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
        })
      }

    </div>
  )
}

export default Todos
