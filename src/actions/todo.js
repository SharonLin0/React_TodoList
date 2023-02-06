import { ACTION_TYPES } from './common'

const addTodo = (data) => (
  { type: ACTION_TYPES.ADD_TODO, payload: data }
)
const editTodo = (data) => (
  { type: ACTION_TYPES.EDIT_TODO, payload: data }
)
const deleteTodo = (data) => (
  { type: ACTION_TYPES.DELETE_TODO, payload: data }
)
const toggleTodo = (data) => (
  { type: ACTION_TYPES.TOGGLE_TODO, payload: data }
)
const doneAllTodo = (data) => (
  { type: ACTION_TYPES.DONE_ALL_TODO, payload: data }
)
const clearDoneTodo = (data) => (
  { type: ACTION_TYPES.CLEAR_DONE_TODO, payload: data }
)

export {
  addTodo,
  editTodo,
  deleteTodo,
  toggleTodo,
  doneAllTodo,
  clearDoneTodo,
}