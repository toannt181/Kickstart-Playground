import React from 'react'
import './style.scss'
import Note from '../Note'

class App extends React.Component {
  render() {
    const { notes } = this.props
    return (
      <ul className="list">
        {notes.map(({ id, note }) => <Note key={id}>{note}</Note>)}
      </ul>
    )
  }
}

export default App
