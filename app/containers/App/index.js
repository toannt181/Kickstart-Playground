import React from 'react'
import './style.scss'

import Route from '../Route'
import Test from '../Test'
import Link from '../Link';

class App extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <h1>Router demo</h1>
        <Link to="/">Home</Link>
        <Link to="/test">Test</Link>
        <Route path="/test" component={Test} />
      </div>
    )
  }
}

export default App
