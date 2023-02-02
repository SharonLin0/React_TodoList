import { combineReducers } from 'redux'

import todoReducer from './todo'
import filterReducer from './filter';

const todoApp = combineReducers({ todoReducer, filterReducer })

export default todoApp