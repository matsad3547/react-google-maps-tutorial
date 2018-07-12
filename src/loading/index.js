import React from 'react'
import logo from './logo.svg'
import './Loading.css'

const styles = {
  main: {
    textAlign: 'center',
    marginTop: '15vh',
  },
  logo: {
    height: 300, //plain numbers in inline styles are interpreted as px
  },
}

const Loading = () => (
  <div
    style={styles.main}
    >
    <img src={logo} className="spinner" alt="logo" style={styles.logo}/>
  </div>
)

export default Loading
