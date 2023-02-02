import { ACTION_TYPES } from '../actions/common'

const defaultTask = [
  { name: 'Meeting with Sharon', isDone: false },
  { name: 'Hit the gym', isDone: true },
  { name: 'Read a book', isDone: false },
]

export default function todos(state = defaultTask, action) {
  switch (action.type) {
    case ACTION_TYPES.ADD_TASK:
      return [
        ...state,
        {
          name: action.taskName,
          isDone: false,
        },
      ]
    case ACTION_TYPES.DELETE_TASK:
      return [...state.slice(0, action.idx), ...state.slice(action.idx + 1)]
    case ACTION_TYPES.TOGGLE_TASK:
      let newState = [...state]
      newState[action.idx].isDone = !newState[action.idx].isDone
      return newState
    default:
      return state
  }
}