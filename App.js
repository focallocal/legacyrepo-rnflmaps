// @flow
import  * as React from 'react'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import {Provider} from 'react-redux'
import Map from './src/screens/map'
import HomeScreen from './src/screens/home/'
import {getStore} from './src/services/redux'

const store = getStore()

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Map,
});

const App = createAppContainer(TabNavigator)

export default () => <Provider store={store}>
  <App/>
</Provider>
