import React, { useState } from 'react'
import './Css/app.css'
import TodoList from './Components/TodoList/TodoList.jsx'
import { connect } from 'react-redux'
import {
  addTodoAction, removeTodoAction, doTodoAction
} from "./Redux/store/todos.js"

function App(props) {

  const [title, setTitle] = useState('')
  const [existTodo, setExistTodo] = useState(false)

  const addTodoHandler = () => {
    if (title.length) {
      setExistTodo(true)
      props.addTodo(title)
      setTitle('')
    }
  }

  const removeTodoHandler = id => props.removeTodo(id)

  const onCompletedTodoHandler = id => props.completedTodo(id)

  return (
    <div>

      <div class="shaps">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className='container'>
        <input type="text" placeholder="Todo Title" value={title} onChange={e => setTitle(e.target.value)} />
        <button className='button-inp' onClick={addTodoHandler}><span className='btn-text-inp'>Add Todo</span></button>
      </div>

      {
        existTodo &&
        <TodoList onRemoveTodo={removeTodoHandler} onCompletedTodo={onCompletedTodoHandler} />
      }

    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addTodo: title => dispatch(addTodoAction(title)),
  removeTodo: id => dispatch(removeTodoAction(id)),
  completedTodo: id => dispatch(doTodoAction(id)),
})

export default connect(null, mapDispatchToProps)(App)