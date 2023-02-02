import { ACTION_TYPES } from '../actions/common'
import { FilterState } from '../common/utils'

export default function filter(state = FilterState.ALL, action) {
  switch (action.type) {
    case ACTION_TYPES.SET_FILTER:
      return action.filter
    default:
      return state
  }
}