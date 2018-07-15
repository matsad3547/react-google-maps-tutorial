import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Loading from '../loading/'
import Map from './Map'
import scriptCache, { getGoogleUrl } from '../utils/'

const styles = {
  warning: {
    textAlign: 'center',
    color: 'red',
    fontSize: '2em',
  }
}

class MapLoader extends Component {

  interval = null
  counter = 0

  state = {
    loaded: false,
    error: null,
  }

  isMapLoaded = () => {
    if(window.google && window.google.maps) {
      clearInterval(this.interval) //stop running the interval if the map is available
      this.setState({
        loaded: true, //changing state here tells the component to rerender
      })
    }
    else if (this.counter > 20) {
      this.setState({
        mapNotAvailable: true,
      })
      clearInterval(this.interval)
    }
    else {
      this.counter = this.counter + 1
      console.log('map is not here', this.counter);
    }
  }

  componentDidMount() {
    this.interval = setInterval( () => this.isMapLoaded(), 500) //check to see if map is loaded every half second
  }

  componentWillMount() {
    const url = getGoogleUrl()
    this.scriptCache = scriptCache({
      google: url
    });
    // getScript()
  }

  render() {
    return (
      this.state.error ?
      <div style={styles.warning}>
        Something has gone wrong loading your the map: {`${this.state.error.message}`}
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
