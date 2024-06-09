import { legacy_createStore } from 'redux'
import reducer from './store/todos.js'

const store = legacy_createStore(reducer)

export default store