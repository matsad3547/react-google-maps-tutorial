import { Component } from 'react'
import PropTypes from 'prop-types'

// this component renders a line between two points and erases that point once there are no longer any points.  Reference: https://developers.google.com/maps/documentation/javascript/shapes#polylines

class MapLineRenderer extends Component {

  line = null

  drawLine = points => {
    const google = window.google

    this.line = new google.maps.Polyline({
      path: points,
    })

    this.line.setMap(this.props.map)
  }

  clearLine = () => {
    this.line.setMap(null)
    this.line = null
  }

  componentWillReceiveProps(nextProps) {

    const {
      points,
    } = nextProps

    if (points.length === 2) {
      this.drawLine(points)
    }
    else if (points.length === 0 && this.props.points.length === 2 ) {
      this.clearLine()
    }
  }

  componentWillUnmount() {
    if (this.line) {
      this.clearLine()
    }
  }

  render() {
    return false
  }
}

MapLineRenderer.propTypes = {
  map: PropTypes.object,
  points: PropTypes.arrayOf(
    PropTypes.exact({
      lat: PropTypes.number,
      lng: PropTypes.number,
    })
  ).isRequired,
}

export default MapLineRenderer
