import { ACTION_TYPES } from '../actions/common'
import { DATABASE_NAME } from '../common/utils'

const initialTodoState = JSON.parse(localStorage.getItem(DATABASE_NAME)) || []
const store = (todos) => {
  localStorage.setItem(DATABASE_NAME, JSON.stringify(todos))
}

export default function todos(state = initialTodoState, action) {
  switch (action.type) {
    case ACTION_TYPES.ADD_TODO:
      store([...state, action.payload])
      return [...state, action.payload]
    case ACTION_TYPES.EDIT_TODO:
      const editIndex = state.findIndex(todo => todo.id === action.payload.id)
      let newTodos = [...state]
      newTodos[editIndex] = action.payload
      store([...newTodos])
      return [...newTodos]
    case ACTION_TYPES.DELETE_TODO:
      const deleteIndex = state.findIndex(todo => todo.id === action.payload.id)
      store([...state.slice(0, deleteIndex), ...state.slice(deleteIndex + 1)])
      return [...state.slice(0, deleteIndex), ...state.slice(deleteIndex + 1)]
    case ACTION_TYPES.TOGGLE_TODO:
      const toggleIndex = state.findIndex(todo => todo.id === action.payload.id)
      let newState = [...state]
      newState[toggleIndex].isDone = !newState[toggleIndex].isDone
      store([...newState])
      return [...newState]
    case ACTION_TYPES.DONE_ALL_TODO:
      state.forEach(todo => todo.isDone = true)
      store([...state])
      return [...state]
    case ACTION_TYPES.CLEAR_DONE_TODO:
      const filterdTodos = state.filter(todo => !todo.isDone)
      store(filterdTodos)
      return filterdTodos
    default:
      return state
  }
}