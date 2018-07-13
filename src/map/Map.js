import React, { Component } from 'react'

const styles = {
  map: {
    width: '90vw',
    height: '80vh',
    marginLeft: '5vw',
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
    const { children } = this.props

    const childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child, {map: this.state.map })
    )

    return (
      <div
        style={styles.map}
        ref={node => this.getMapRef(node)}
        >
        {this.state.map ? childrenWithProps : null}
      </div>
    )
  }
}

export default Map
