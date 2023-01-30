import { combineReducers } from 'redux'

import todoReducer from './todo'

const todoApp = combineReducers({ todoReducer })

export default todoApp