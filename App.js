// @flow
import  * as React from 'react'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import {Provider} from 'react-redux'
import Meteor from 'react-native-meteor'
import Map from './src/screens/map'
import HomeScreen from './src/screens/home/'
import {getStore} from './src/services/redux'
import {getConfig} from './src/services/config'

const {serverUrl} = getConfig()

const store = getStore()

Meteor.connect(serverUrl)

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Map,
});

const App = createAppContainer(TabNavigator)

export default () => <Provider store={store}>
  <App/>
</Provider>
