import React from 'react'
import { observer } from 'mobx-react'
import './style.scss'

import Route from '../Route'
import Test from '../Test'
import Link from '../Link';

@observer
class App extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <h1>Router demo {this.props.appState.name}</h1>
        <Link to="/">Home</Link>
        <Link to="/test">Test</Link>
        <Route path="/test" component={Test} />
      </div>
    )
  }
}

export default App
