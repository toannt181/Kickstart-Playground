import React from 'react'
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom'
import './style.scss'
import Demo from '../Demo'

class App extends React.Component {
  componentWillReceiveProps(...rest) {
    console.log('componentWillReceiveProps', rest)
  }

  shouldComponentUpdate(...rest) {
    console.log('shouldComponentUpdate', rest)
    return true
  }

  componentWillUpdate(...rest) {
    console.log('componentWillUpdate', rest)
  }

  render() {
    return (
      <div className="container">
        <h1>app com</h1>
        <nav><Link to="/Dashboard">Dashboard</Link></nav>
        <nav><Link to="/">Home</Link></nav>
        <div>
          <Route path="/Dashboard" component={Demo} />
        </div>
      </div>
    )
  }
}

export default App
