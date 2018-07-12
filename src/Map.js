import React, { Component } from 'react'

const styles = {
  map: {
    width: '100vw',
    height: '100vh',
  }
}

class Map extends Component {
  mapRef = null

  state = {
    map: null,
  }

  getMapRef = node => this.mapRef = node

  componentDidMount() {
    this.loadMap()
  }

  loadMap = () => {
    const maps = window.google.maps
    const ref = this.mapRef

    const mapConfig = {
      zoom: 12,
      center: new maps.LatLng(40.75, -111.87)
    }

    const map = new maps.Map(ref, mapConfig)

    this.setState({
      map, //in JS, if the key and property are the same, you can omit one.  Eg: this is the same as {map: map,}
    })
  }

  render() {
    return (
      <div
        style={styles.map}
        ref={node => this.getMapRef(node)}
        >
      </div>
    )
  }
}

export default Map
