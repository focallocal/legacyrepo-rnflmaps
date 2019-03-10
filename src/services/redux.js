// @flow
import {combineReducers, createStore} from 'redux'
import location from '../reducers/location'

const reducers = combineReducers({
  location,
})

export function getStore() {
  return createStore(reducers)
}