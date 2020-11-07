import React, { Component, useState } from "react";
import "./../styles/App.css";
class App extends Component {
  currentTime() {
    return new Date().toLocaleTimeString();
  }
  constructor(props) {
    super(props);
    this.state = {
      time: this.currentTime()
    };
  }
  render() {
    return (
      <div className="Clock">
        <h3 id="time">{this.state.time}</h3>
      </div>
    );
  }
  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({ time: this.currentTime() }),
      1000
    );
  }

  componentWillUnMount() {
    clearInterval(this.interval);
  }
}

export default App;
