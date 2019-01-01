import React, { Component } from 'react'

class Watchers extends Component {
  constructor() {
    super()
    this.state = {}
  }
  componentDidMount() {}
  userNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }
  render() {
    return (
      <div id="watchers-comp">
        <div className="user" />
        <div className="info">
          {this.userNumber(20, 80)} People watching this now!
        </div>
      </div>
    )
  }
}

export default Watchers
