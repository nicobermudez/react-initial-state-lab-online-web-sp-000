import React from 'react';

export default class Bomb extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: this.prop.initialCount
    }
  }

  render() {
    return (
      <h1>Hello</h1>
    )
  }
}
