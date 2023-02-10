import { ACTION_TYPES } from '../actions/common'
import { DATABASE_NAME } from '../common/utils'

const initialTodoState = JSON.parse(localStorage.getItem(DATABASE_NAME)) || []

export default function todos(state = initialTodoState, action) {
  switch (action.type) {
    case ACTION_TYPES.ADD_TODO:
      return [...state, action.payload]
    case ACTION_TYPES.EDIT_TODO:
      const editIndex = state.findIndex(todo => todo.id === action.payload.id)
      let newTodos = [...state]
      newTodos[editIndex] = action.payload
      return newTodos
    case ACTION_TYPES.DELETE_TODO:
      const filterdTodosExist = state.filter(todo => todo.id !== action.payload.id)
      return filterdTodosExist
    case ACTION_TYPES.TOGGLE_TODO:
      const toggleIndex = state.findIndex(todo => todo.id === action.payload.id)
      let newState = [...state]
      newState[toggleIndex].isDone = !newState[toggleIndex].isDone
      return newState
    case ACTION_TYPES.TOGGLE_TODO_ALL:
      state.forEach(todo => todo.isDone = action.payload.isToggleDone)
      return [...state]
    case ACTION_TYPES.CLEAR_DONE_TODO:
      const filterdTodos = state.filter(todo => !todo.isDone)
      return filterdTodos
    default:
      return state
  }
}