import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'

const MOUNT_NODE = document.getElementById('app')

const initialState = {
  nextNoteId: 1,
  notes: [
    { id: 0, note: 'this is first note' },
  ],
}
window.state = initialState

const renderApp = () => {
  ReactDOM.render(
    <App notes={window.state.notes} />,
    MOUNT_NODE
  )
}

renderApp()

export default renderApp
