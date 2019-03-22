import { combineReducers, } from 'redux'
import postits from './postits'
import nextId from './nextId'

const rootReducer = combineReducers({
  postits,
  nextId,
})

export default rootReducer
