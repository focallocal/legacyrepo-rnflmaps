// @flow
import * as React from 'react'
import Meteor from 'react-native-meteor'
import MapView, {Marker} from 'react-native-maps'

import type {Location} from '../../services/geocoder'

type Props = {
  location?: Location,
  errorMessage?: string,
}

type State = {
  events?: Array<Event>,
  errorMessage?: string,
}

type Event = {
  _id: string,
  address: {
    name: string,
    location: {
      type: 'point',
      coordinates: Array<number>,
    },
  },
  categories: Array<{ name: string, color: string }>,
  createdAt: Date,
  description: string,
  engagement: {
    limit: number,
    attendees: Array<{ id: string, name: string }>,
  },
  findHints: string,
  name: string,
  organiser: {
    _id: string,
    name: string,
  },
  overview: string,
  when: {
    startingTime: string,
    endingTime: string,
    multipleDays: boolean,
    recurring: any,
    repeat: boolean,
    startingDate: Date,
    endingDate: ?Date,
  }
}

class Map extends React.Component<Props, State> {

  state = {}

  mounted = false

  _setEvents = (err, events) => {
    if(this.mounted && events) {
      this.setState({events})
    }
  }

  _fetchEvents() {
    const {location} = this.props
    const skip = 0
    const limit = 30
    const params = {skip, limit, location: {lat: location.latitude, lng: location.longitude}}
    this.mounted && Meteor.call('Events.getFutureEvents', params, this._setEvents)
  }

  componentDidMount(): void {
    // console.log('did mount')
    this.mounted = true
    this._fetchEvents()
  }

  componentWillUnmount(): void {
    this.mounted = false
  }

  render() {
    const {location} = this.props
    const {events} = this.state
    const initialRegion = location ? location : null
    return (
      <MapView
        style={{flex: 1,}}
        region={initialRegion}
        showsUserLocation={!location}
      >
        {
          events && events.map(event => {
            const [longitude, latitude] = event.address.location.coordinates
            return <Marker
              key={event._id}
              coordinate={{latitude, longitude}}
              title={event.overview}
              description={event.description}
            />
          })
        }
      </MapView>
    )
  }
}

export default Map