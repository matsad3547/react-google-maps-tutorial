import React, { Component } from 'react'

const styles = {
  map: {
    width: '100vw',
    height: '100vh',
  }
}

class MapLoader extends Component {

  mapRef = null
  timeout = null

  state = {
    map: null,
  }

  getMapRef = node => this.mapRef = node

  isMapHere = () => {
    if(window.google.maps) {
      clearTimeout(this.timeout)
      this.setState({
        map: window.google.maps,
      })
      this.loadMap()
    }
    else {
      console.log('map is not here');
    }
  }

  loadMap = () => {
    const map = this.state.map
    const node = this.mapRef

    const mapConfig = {
      zoom: 12,
      center: new map.LatLng(40.75, -111.87)
    }

    new map.Map(node, mapConfig)
  }

  componentDidMount(){
    this.timeout = setTimeout( () => this.isMapHere(), 1000)
  }

  render() {
    return (
      this.state.map ?
        <div
          style={styles.map}
          ref={node => this.getMapRef(node)}
          >
          the map will be here
        </div>
        :
        <div >
          ...Map is loading
        </div>
    )
  }
}

export default Map
