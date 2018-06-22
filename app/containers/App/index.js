import React from 'react'
import { Motion, spring, TransitionMotion } from "react-motion";
import './style.scss'

class App extends React.Component {
  state = {
    items: ['hello', 'world', 'click', 'me'],
    show: false,
  }

  handleAdd = () => {
    const newItems = this.state.items.concat([
      prompt('Enter some text')
    ])
    this.setState({ items: newItems })
  }

  handleRemove(i) {
    const newItems = this.state.items.slice()
    newItems.splice(i, 1)
    this.setState({ items: newItems })
  }

  test = () => {
    const items = [...this.state.items]
    items.splice(this.state.items.length - 1, 1)
    console.log(items)
    this.setState({ items });
  }

  willLeave() {
    return { x: spring(300), y: spring(0), height: spring(0), padding: 0, margin: 0, display: 'none' };
  }

  willEnter() {
    return { x: 0, y: 0 };
  }

  // willEnter() {
  //   return {
  //     height: 0,
  //     opacity: 1,
  //   };
  // };

  // willLeave() {
  //   return {
  //     height: spring(0),
  //     opacity: spring(0),
  //   };
  // };


  getDefaultStyle = () => {
    this.state.items.map(() => ({ x: 0, y: 0, height: 50 }))
  }

  render() {
    const { show } = this.state
    return (
      <div>
        <button onClick={this.handleAdd}>show</button>
        <TransitionMotion
          willLeave={this.willLeave}
          willEnter={this.willEnter}
          defaultStyle={this.getDefaultStyle}
          styles={this.state.items.map(na => ({
            key: na,
            data: na,
            style: { x: spring(100, { precision: 1 }), y: spring(1), height: spring(50, { precision: 1 }) },
          }))}
        >
          {styles => (
            <div style={{ width: 250 }}>
              {styles.map((config, k) => {
                return <div
                  className="item"
                  key={config.key}
                  onClick={() => this.handleRemove(k)}
                  style={{
                    transform: `translateX(${config.style.x}px)`,
                    opacity: config.style.y,
                    height: config.style.height,
                  }}
                >
                  {config.data}{console.log(config.style.padding)}
                </div>
              })}
            </div>
          )}
        </TransitionMotion>
      </div >
    )
  }
}

export default App
