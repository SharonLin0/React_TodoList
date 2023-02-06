export const DATABASE_NAME = 'react-todo'

export const RouterPath = {
  ALL: '/',
  TODO: '/todo',
  DONE: '/done',
}

export const Text = {
  TITLE: 'todo list',
  INPUT_PLACEHOLDER: 'Add a todo ...',
  FILTERSTATE_ALL: 'All',
  FILTERSTATE_TODO: 'Todo',
  FILTERSTATE_DONE: 'Done',
  COMPLETE_ALL: 'Mark all',
  REMOVE_COMPLETED: 'Clear completed',
  COUNTER_SUFFIX_PLURAL: 'items left',
  COUNTER_SUFFIX: 'item left',
}

export const FilterState = {
  ALL: 'ALL',
  TODO: 'TODO',
  DONE: 'DONE',
}

export const Keyboard = {
  ESCAPE: 27,
  ENTER: 13,
}

export function generateUUID() {
  var i, random
  var uuid = ''

  for (i = 0; i < 32; i++) {
    random = Math.random() * 16 | 0
    if (i === 8 || i === 12 || i === 16 || i === 20) uuid += '-'
    // eslint-disable-next-line no-mixed-operators
    uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random)).toString(16)
  }
  return uuid
}