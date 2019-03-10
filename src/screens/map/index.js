// @flow
import {connect} from 'react-redux'
import MapScreen from './map'

const mapStateToProps = ({location}) => {
  console.log(location)
  return location
}

export default connect(mapStateToProps)(MapScreen)
