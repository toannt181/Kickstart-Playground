import React from 'react'
import { Route, Link, withRouter } from 'react-router-dom'

import Test from '../Test'

class Demo extends React.PureComponent {
  render() {
    console.log('demo render')
    return (
      <div className="container">
        <h2>Demo container</h2>
        <nav><Link to="/Dashboard/test">To test</Link></nav>
        <Route path="/Dashboard/test" component={Test} />
      </div>
    )
  }
}

export default Demo
