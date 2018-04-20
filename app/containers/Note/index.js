import React from 'react'

class Note extends React.PureComponent {
  render() {
    const { children } = this.props
    return (
      <li className="note">
        {children}
      </li>
    )
  }
}

export default Note
