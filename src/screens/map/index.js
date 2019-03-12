// @flow
import {connect} from 'react-redux'
import MapScreen from './map'

const mapStateToProps = ({location}, {navigation}) => {
  return {
    ...location,
    goHome: () => navigation.navigate('Home')
  }
}

export default connect(mapStateToProps)(MapScreen)
