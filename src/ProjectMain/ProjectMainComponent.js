import React, { Component } from 'react';
import Timer from './Timer.js';
import '../App.css';

class ProjectMain extends Component {
  render() {
    return (
      <div className="column-lg">
        <div className="card">
          <h1>Project: {this.props.project.name}</h1>
          <h2>{this.props.project.description}</h2>
        </div>
        <Timer/>
      </div>
    )
  }
}

export default ProjectMain;
