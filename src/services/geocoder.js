import {getConfig} from './config'
import Geocoder from 'react-native-geocoding'

const config = getConfig()

const {googleApiKey} = config.private

Geocoder.init(googleApiKey)

export async function geocodeFromString(input: string): { location?: { lat: number, lng: number }, error?: string } {
  try {
    const {results, status} = await Geocoder.from(input)
    if (status === 'OK' && results.length) {
      const [{geometry: {location}}] = results
      return {
        location,
      }
    }
  } catch (e) {
    return {error: `Could not geocode ${input}`}
  }
}

