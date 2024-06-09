// ActionTypes
export const addTodo = 'ADD_TODO'
export const removeTodo = 'REMOVE_TODO'
export const doTodo = 'DO_TODO'

// Reducer
export default function reducer(state = [], action) {
    let stateCopy = [...state]
    switch (action.type) {
        case addTodo: return [...stateCopy, { id: stateCopy.length + 1, ...action.payload }]
        case removeTodo: return stateCopy.filter(todo => todo.id !== action.id)
        case doTodo: {
            return stateCopy.map(todo => todo.id === action.id ? { ...todo, completed: !todo.completed } : todo)
        }
        default: return state
    }
}

// ActionCreators
export const addTodoAction = title => ({
    type: addTodo,
    payload: {
        title,
        completed: false
    }
})

export const removeTodoAction = id => ({
    type: removeTodo,
    id
})

export const doTodoAction = id => ({
    type: doTodo,
    id
})