import { combineReducers, createStore } from 'redux'
import historyReducer from './history_reducer'

let reducers = combineReducers({
  historyScreen: historyReducer,
})

let store = createStore(reducers)

export default store
