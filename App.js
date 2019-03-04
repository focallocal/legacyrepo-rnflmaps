import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'
import Map from './screens/map'
import Home from './screens/home'
import Tabs from 'react-native-tabs'


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Tabs selected="Map">
          <Map name="Map"/>
          <Home name="Home"/>
        </Tabs>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
})