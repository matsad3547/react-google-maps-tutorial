import { PureComponent } from 'react'
import PropTypes from 'prop-types'

// this component renders a line between two points and erases that point once there are no longer any points.  Reference: https://developers.google.com/maps/documentation/javascript/shapes#polylines

class MapLineRenderer extends PureComponent {

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
    // this method is fired when props change after a component is mounted - the perfect place to listen to props changes

    const {
      points,
    } = nextProps

    if (points.length === 2) {
      this.drawLine(points)
    }
    else if (points.length === 0 && this.props.points.length === 2 ) {
      // by comparing props and nextProps, changes in upstream components can be detected and responded to
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
