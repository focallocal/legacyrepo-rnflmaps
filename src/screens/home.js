import * as React from 'react'
import {Button, View, Text} from 'react-native'
import Input from '../components/Input'
import {geocodeFromString} from '../services/geocoder'

type Props = {}

type State = {
  search: string,
}

class Home extends React.Component<Props, State> {

  state = {
    search: ''
  }

   _geocode = async () => {
    const {search} = this.state
    const result = await geocodeFromString(search)
    console.log(result)
  }

  render() {
    const {search} = this.state

    return (
      <View style={{backgroundColor: 'white', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Input
          placeholder="Enter City, State or Postcode"
          onEndEditing={this._geocode}
          onChangeText={search => this.setState({search,})}
          value={search}
        />
        <Text>HOME SWEET HOME!</Text>
        <Button
          title="Use Current Location"
          onPress={() => console.log('Search current position')}
        />
        {/*TODO Need to add i18n*/}
      </View>
    )
  }

}

export default Home