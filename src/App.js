import React, { PureComponent } from 'react'

import MapLoader from './map/MapLoader'
import MapClickHandler from './map/MapClickHandler'
import MapMarkerRenderer from './map/MapMarkerRenderer'
import MapLineRenderer from './map/MapLineRenderer'

import Button from './Button'

const styles = {
  header: {
    textAlign: 'center',
  },
  title: {
    fontSize: '1.5em',
  },
}

class App extends PureComponent {

  state = {
    points: [],
  }

  setPoint = e => {

    const point = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    }

    if (this.state.points.length < 2) {
      //here I'm passing a function to `setState` to ensure that react keeps state changes in order
        this.setState(prevState => ({
          points: [...prevState.points, point]
        })
      )
    }
  }

  clearPoints = () => this.setState({ points: [], })

  render() {

    return (
      <div className="App">
        <header
          className="App-header"
          style={styles.header}
          >
          <h1
            className="App-title"
            style={styles.title}
            >React Google Maps Tutorial</h1>
          Click the map to add points
          <Button
            label="Clear Points"
            onClick={this.clearPoints}
            />
        </header>
        <MapLoader>
          <MapClickHandler
            onClick={this.setPoint}
            />
          { this.state.points.map( (point, i) =>
              <MapMarkerRenderer
                point={point}
                index={i}
                key={`marker-${i}`}
                />
            )
          }
          <MapLineRenderer
            points={this.state.points}
            />
        </MapLoader>
      </div>
    )
  }
}

export default App
