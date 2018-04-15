import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './containers/App'

const MOUNT_NODE = document.getElementById('app')

const app = (
  <Router>
    <App />
  </Router>
)

ReactDOM.render(
  app,
  MOUNT_NODE
)
