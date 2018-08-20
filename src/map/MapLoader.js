import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Loading from '../loading/'
import Map from './Map'
import {
  getGoogleUrl,
  addScriptTag,
} from '../utils/'

const styles = {
  warning: {
    textAlign: 'center',
    color: 'red',
    fontSize: '2em',
  }
}

class MapLoader extends PureComponent {

  interval = null
  counter = 0

  state = {
    loaded: false,
    error: null,
  }

  onLoad = () => this.setState({ loaded: true })

  onError = e => {
    console.error('there was an error loading the map:', e)
    this.setState({
      error: e
    })
  }

  componentWillMount() {
    const url = getGoogleUrl()
    // addScriptTag(url, this.onLoad, this.onError)
    addScriptTag(url)
      .then(this.onLoad)
      .catch(this.onError)
  }

  render() {
    return (
      this.state.error ?
      <div style={styles.warning}>
        Something has gone wrong loading your the map, please check the console
      </div> :
      (this.state.loaded ? //if the map is available on the window object, render the Map component; otherwise render Loading
        <Map>
          {this.props.children}
        </Map>
        :
        <Loading />)
    )
  }
}

MapLoader.propTypes = { //Provide a type for child components - if there is just one child, it is a single node; if there are more than one, there is an array of them
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
}

export default MapLoader
