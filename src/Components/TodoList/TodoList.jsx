import React from "react";
import './TodoList.css'
import { connect } from "react-redux";

function TodoList({ todos, onRemoveTodo, onCompletedTodo }) {
    return (
        <>
            {
                todos.map(todo => (
                    <div key={todo.id} className="todo-parent">
                        <div>
                            <p className={todo.completed ? "isDoneTodo" : ''}>{todo.title}</p>
                        </div>

                        <div>
                            <button className="button" onClick={() => onCompletedTodo(todo.id)}> {todo.completed ? 'completed' : 'unCompleted'}</button>
                            <button className="button" onClick={() => onRemoveTodo(todo.id)}>Remove</button>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

const mapStateToProps = state => ({ todos: state })

export default connect(mapStateToProps)(TodoList)