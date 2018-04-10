import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'

import App from './containers/App'

const MOUNT_NODE = document.getElementById('app')

const route = <App />

ReactDOM.render(
  route,
  MOUNT_NODE
)
