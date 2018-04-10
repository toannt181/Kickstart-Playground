import React from 'react'
import Test from '../Test'
import { Link, Route } from 'react-router-dom'
import './style.scss'

class Demo extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <nav>
          <Link to="/dashboard/test">Test</Link>
          <Link to="/">Home</Link>
        </nav>
        <div>
          <Route path="/dashboard/test" component={Test} />
        </div>
      </div>
    )
  }
}

export default Demo
