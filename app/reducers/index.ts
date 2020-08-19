import { combineReducers, createStore } from 'redux'
import historyReducer from './history_reducer'

const reducers = combineReducers({
  historyScreen: historyReducer
})

const store = createStore(reducers)

export default store
