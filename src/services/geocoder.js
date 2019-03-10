// @flow
import {getConfig} from './config'
import Geocoder from 'react-native-geocoding'
import {Dimensions} from 'react-native'

const {width, height} = Dimensions.get('window')

const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO
const DELTAS = {
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
}

export type Location = {
  latitude: number,
  longitude: number,
  latitudeDelta: number,
  longitudeDelta: number,
}

const config = getConfig()

const {googleApiKey} = config.private

Geocoder.init(googleApiKey)

export async function geocodeFromString(input: string): { location?: Location, error?: string } {
  try {
    const {results, status} = await Geocoder.from(input)
    if (status === 'OK' && results.length) {
      const [{geometry: {location}}] = results
      return {
        location: {
          latitude: location.lat,
          longitude: location.lng,
          ...DELTAS,
        },
      }
    }
  } catch (e) {
    return {error: `Could not geocode ${input}`}
  }
}


export function getCurrentLocation(cb: (err?: ?PositionError, location?: ?Location) => void) {
  navigator.geolocation.getCurrentPosition((position) => {
      const latitude = parseFloat(position.coords.latitude)
      const longitude = parseFloat(position.coords.longitude)

      return cb( null, {
        latitude,
        longitude,
        ...DELTAS,
      })

    },
    (error) => cb(error),
    {enableHighAccuracy: true, maximumAge: 1000, timeout: 0})
}
