import { Component } from 'react'
import PropTypes from 'prop-types'

//This component will not mount until there is a point where it can render a marker

class MapMarkerRenderer extends Component {

  marker = null

  componentDidMount() {

    const {
      map,
      point,
      index,
    } = this.props

    const google = window.google

    const color = index === 0 ? 'green' : 'red'

    const icon = {
      path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z M -2,-30 a 2,2 0 1,1 4,0 2,2 0 1,1 -4,0', //this can be customized by using an svg path.  Reference: https://stackoverflow.com/questions/7095574/google-maps-api-3-custom-marker-color-for-default-dot-marker
      fillColor: color,
      fillOpacity: 1,
      strokeColor: '#000',
      strokeWeight: 2,
      scale: 1,
    }

    this.marker = new google.maps.Marker({
      map,
      position: point,
      icon,
    })
    this.marker.setMap(map)
  }

  clearMarker = () => {
    this.marker.setMap(null)
    this.marker = null
  }

  componentWillUnmount() {
    this.clearMarker()
  }

  render(){
    return false
  }
}

MapMarkerRenderer.propTypes = {
  map: PropTypes.object,
  index: PropTypes.number.isRequired,
  point: PropTypes.exact({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }).isRequired,
}

export default MapMarkerRenderer
