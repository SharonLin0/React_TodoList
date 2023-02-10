import { ACTION_TYPES } from './common'

const setFilter = (data) => (
  { type: ACTION_TYPES.SET_FILTER, payload: data }
)

export {
  setFilter
}