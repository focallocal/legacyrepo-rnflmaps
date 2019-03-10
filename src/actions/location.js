// @flow
import type {Location} from '../services/geocoder'

export const SET_LOCATION = 'Set the location the user is interested in'
export function setLocation(location: Location) {
  return {
    type: SET_LOCATION,
    location,
  }
}

export const SET_LOCATION_ERROR = 'Set an error message for location retrieval'
export function setLocationErrorMessage(errorMessage: string) {
  return {
    type: SET_LOCATION_ERROR,
    errorMessage,
  }
}

export const CLEAR_LOCATION_ERROR = 'Clear the error message for location retrieval'
export function clearErrorMessage() {
  return {
    type: CLEAR_LOCATION_ERROR,
  }
}