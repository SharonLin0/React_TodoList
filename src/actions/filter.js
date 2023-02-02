import { ACTION_TYPES } from './common'

export function setFilter(filter){
  return {
    type: ACTION_TYPES.SET_FILTER,
    filter
  }
}