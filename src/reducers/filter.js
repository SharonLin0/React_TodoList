import { ACTION_TYPES } from '../actions/common'
import { FilterState } from '../common/utils'

const initialFilterState = () => {
  const path = window.location.hash
  return path.replace(/#(\/)/g, '').toUpperCase() || FilterState.ALL
}

export default function filter(state = initialFilterState(), action) {
  switch (action.type) {
    case ACTION_TYPES.SET_FILTER:
      return action.payload
    default:
      return state
  }
}