import React, {Component} from 'react'
import {View, Text} from 'react-native'

class Home extends Component<{}> {
  render() {
    return (
      <View style={{backgroundColor: 'white', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>HOME SWEET HOME!</Text>
      </View>
    )
  }
}

export default Home