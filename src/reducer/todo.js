import * as types from '../actions/ActionTypes'

const defaultTask = [
  { name: 'Meeting with Sharon', isCompleted: false },
  { name: 'Hit the gym', isCompleted: true },
  { name: 'Read a book', isCompleted: false },
]

export default function todos(state = defaultTask, action) {
  switch (action.type) {
    case types.TASK_ADD:
      return [
        ...state,
        {
          name: action.taskName,
          isCompleted: false,
        },
      ]
    case types.TASK_DELETE:
      return [...state.slice(0, action.idx), ...state.slice(action.idx + 1)]
    case types.TASK_TOGGLE:
      let newState = [...state]
      newState[action.idx].isCompleted = !newState[action.idx].isCompleted
      return newState
    default:
      return state
  }
}