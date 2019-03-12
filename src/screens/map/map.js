// @flow
import * as React from 'react'
import MapView from 'react-native-maps'

import type {Location} from '../../services/geocoder'

type Props = {
  location?: Location,
  errorMessage?: string,
}

class Map extends React.Component<Props> {

  render() {
    const {location} = this.props
    const initialRegion = location ? location : null
    return (
        <MapView
          style={{flex: 1,}}
          region={initialRegion}
          showsUserLocation={!location}
        />
    )
  }
}

export default Map