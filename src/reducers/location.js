// @flow
import type {Location} from '../services/geocoder'
import {CLEAR_LOCATION_ERROR, SET_LOCATION_ERROR, SET_LOCATION} from '../actions/location'
type State = {
  location?: Location,
}
type Action = {
  type: string,
  location?: Location,
  errorMessage?: string,
}

const initialState = Object.freeze({})

export default function reducer(state: State = initialState, action: Action): State {
  switch(action.type) {
    case SET_LOCATION: return {...state, location: action.location}
    case SET_LOCATION_ERROR: return {...state, errorMessage: action.errorMessage}
    case CLEAR_LOCATION_ERROR:
      const {errorMessage, ...restOfState} = state
      return {...restOfState}
  }

  return state
}