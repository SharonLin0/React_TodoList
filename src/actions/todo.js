import * as types from './ActionTypes'

export function addTask(taskName) {
  return {
    type: types.TASK_ADD,
    taskName
  }
}

export function deleteTask(idx) {
  return {
    type: types.TASK_DELETE,
    idx
  }
}

export function toggleTask(idx) {
  return {
    type: types.TASK_TOGGLE,
    idx
  }
}