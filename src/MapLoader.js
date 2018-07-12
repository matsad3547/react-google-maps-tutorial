import React, { Component } from 'react'
import Loading from './loading/'
import Map from './Map'

class MapLoader extends Component {

  interval = null

  state = {
    loaded: false,
  }

  isMapLoaded = () => {
    if(window.google.maps) {
      clearInterval(this.interval) //stop running the interval if the map is available
      this.setState({
        loaded: true, //changing state here tells the component to rerender
      })
    }
    else {
      console.log('map is not here');
    }
  }

  componentDidMount(){
    this.interval = setInterval( () => this.isMapLoaded(), 500) //check to see if map is loaded every half second
  }

  render() {
    return (
      this.state.loaded ? //if the map is available on the window object, render the Map component; otherwise render Loading
        <Map />
        :
        <Loading />
    )
  }
}

export default MapLoader
