import React from 'react'
import PropTypes from 'prop-types'
import isMathPath from './helper'

import { register, unRegister } from './listener'

class Route extends React.PureComponent {
  static propTypes = {
    exact: PropTypes.bool,
    path: PropTypes.string,
    component: PropTypes.func,
    render: PropTypes.func,
  }

  static defaultProps = {
    exact: false,
    path: '',
    component: null,
    render: () => null,
  }

  componentWillMount() {
    window.addEventListener('popstate', this.handleUpdate)
    register(this)
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.handleUpdate)
    unRegister(this)
  }

  handleUpdate = () => {
    this.forceUpdate()
  }

  render() {
    const {
      path, component: Component, render, exact,
    } = this.props
    const math = isMathPath(window.location.pathname, { path, exact })

    if (!math) return null
    if (Component) return <Component {...math} />
    return render({ math })
  }
}

export default Route
