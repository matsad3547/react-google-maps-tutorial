import React, { Component } from 'react'
import MapLoader from './MapLoader'

const styles = {
  header: {
    textAlign: 'center',
  },
  title: {
    fontSize: '1.5em',
  },
}

class App extends Component {
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
            >Welcome to a React Google Maps Tutorial</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <MapLoader/>
      </div>
    )
  }
}

export default App;
