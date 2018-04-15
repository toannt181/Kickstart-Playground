import React from 'react'
import PropTypes from 'prop-types'
import { instances } from '../Route/listener'

class Link extends React.PureComponent {
  static propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.any,
  }

  handleClick = (event) => {
    const { to } = this.props
    window.history.pushState({}, null, to)
    event.preventDefault()
    instances.forEach(instance => instance.forceUpdate())
  }

  render() {
    const { to, children } = this.props

    return (
      <a href={to} onClick={this.handleClick}>
        {children}
      </a>
    )
  }
}

export default Link
