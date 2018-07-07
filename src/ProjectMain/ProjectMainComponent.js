import React, { Component } from 'react';
import Timer from './Timer.js';
import '../App.css';

class ProjectMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progressState: 1,
      breakCount: 0

    }
  }

  finishSession() {
    this.setState({
      progressState: 2
    });
    return this.state.breakCount === 3 ? 30 * 60 : 5 * 60;
  }

  finishBreak() {
      this.setState({
        progressState: 0,
        breakCount: (this.state.breakCount + 1) % 4
      });
  }

  startSession() {
    this.setState({
      progressState: 1
    });
  }

  render() {
    return (
      <div className="column-lg">
        <div className="card">
          <h1>Project: {this.props.project.name}</h1>
          <h2>{this.props.project.description}</h2>
        </div>
        <Timer
          progressState={this.state.progressState}
          onFinishSession={this.finishSession.bind(this)}
          onFinishBreak={this.finishBreak.bind(this)}
          onStartSession={this.startSession.bind(this)}/>
      </div>
    )
  }
}

export default ProjectMain;
