import { Component } from 'react'
import PropTypes from 'prop-types'

class MapClickHandler extends Component {

  componentDidMount() {

    const { map } = this.props

    if (map) {
      map.addListener('click', this.props.onClick)
    }
  }

  render(){
    return false //nothing is rendered because google maps is handling any changes to the map portion of the DOM
  }
}

MapClickHandler.propTypes = {
  map: PropTypes.object,
  onClick: PropTypes.func.isRequired, //a click function is necessary for this component - obviously
}

export default MapClickHandler
