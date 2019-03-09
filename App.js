import  * as React from 'react'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import Map from './screens/map'
import HomeScreen from './screens/home'

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Map,
});

export default createAppContainer(TabNavigator)
