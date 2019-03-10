// @flow
import * as React from 'react'
import {Button, View, Text} from 'react-native'
import Input from '../../components/Input'
import {geocodeFromString, getCurrentLocation} from '../../services/geocoder'

import type {Location} from '../../services/geocoder'
import {ErrorText} from '../../components/text'

type Props = {
  errorMessage?: string,
  onSetLocation: (location: Location) => void,
  onSetLocationErrorMessage: (errorMessage: string) => void,
  onClearErrorMessage: () => void,
}

type State = {
  search: string,
}

class Home extends React.Component<Props, State> {

  state = {
    search: ''
  }

  _currentLocation = () => {
    const {onClearErrorMessage, onSetLocation, onSetLocationErrorMessage} = this.props

    getCurrentLocation((err, location) => {
      if(err) {
        console.error(err)
        return onSetLocationErrorMessage('Could not get current location')
      }
      if(location) {
        onClearErrorMessage()
        onSetLocation(location)
      }
    })
  }

  _geocode = async () => {
    const {onClearErrorMessage, onSetLocation, onSetLocationErrorMessage} = this.props
    const {search} = this.state
    const result = await geocodeFromString(search)
    const {location, error} = result
    if(error) {
      return onSetLocationErrorMessage(error)
    }
    if(location) {
      onClearErrorMessage()
      onSetLocation(location)
    }
  }

  render() {
    const {search} = this.state
    const {errorMessage} = this.props

    return (
      <View style={{backgroundColor: 'white', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Input
          placeholder="Enter City, State or Postcode"
          onEndEditing={this._geocode}
          onChangeText={search => this.setState({search,})}
          value={search}
        />
        <ErrorText errorMessage={errorMessage} />
        <Button
          title="Use Current Location"
          onPress={this._currentLocation}
        />
        {/*TODO Need to add i18n*/}
      </View>
    )
  }

}

export default Home