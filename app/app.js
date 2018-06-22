import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './containers/App'

const MOUNT_NODE = document.getElementById('app')

const app = (
  <Router>
    <App />
  </Router>
)

// ReactDOM.render(
//   app,
//   MOUNT_NODE
// )
'use strict';

class Cat {
  @readonly
  t = 1
  
  @readonly
  meow() {
    return 'Say meow!'
  }
}

function readonly(target, name, descriptor) {
  descriptor.writable = false
}

window.Cat = Cat
