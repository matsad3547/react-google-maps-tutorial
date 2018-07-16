import { Component } from 'react'
import PropTypes from 'prop-types'

class MapClickHandler extends Component {

  clickListener = null

  componentDidMount() {

    const { map } = this.props

    this.clickListener = map.addListener('click', this.props.onClick)
  }

  componentWillUnmount() {
    this.props.map.event.removeListener(this.clickListener)
    //remove the map listener when the component goes away
  }

  render(){
    return false //nothing is rendered because google maps is handling any changes to the map portion of the DOM
  }
}

MapClickHandler.propTypes = {
  map: PropTypes.object, //the map object is initially null
  onClick: PropTypes.func.isRequired, //a click function is necessary for this component - obviously
}

export default MapClickHandler
