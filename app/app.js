import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { observable } from 'mobx'
import App from './containers/App'

const MOUNT_NODE = document.getElementById('app')

const appState = observable({
  name: 'helo',
})

const app = (
  <Router>
    <App appState={appState} />
  </Router>
)

class T {
  @decorator name = { toan: 'ha' }
}

window.T = T

function decorator(target) {
  target.edited = true;
}

ReactDOM.render(
  app,
  MOUNT_NODE
)
