import React from 'react'
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom'

import Demo from '../Demo'
import './style.scss'

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <div className="container">
          <nav>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/">Home</Link>
          </nav>
          <div>
            <Route path="/dashboard" component={Demo} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
