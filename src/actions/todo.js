import { ACTION_TYPES } from './common'

export function addTask(taskName) {
  return {
    type: ACTION_TYPES.ADD_TASK,
    taskName
  }
}

export function deleteTask(idx) {
  return {
    type: ACTION_TYPES.DELETE_TASK,
    idx
  }
}

export function toggleTask(idx) {
  return {
    type: ACTION_TYPES.TOGGLE_TASK,
    idx
  }
}