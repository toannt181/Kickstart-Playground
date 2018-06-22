import React from 'react'

class Test extends React.PureComponent {
  render() {
    console.log(this.props)
    return (
      <h2>{this.props.title} + {this.props.children.childrenFactory(123)}</h2>
    )
  }
}

export default Test
