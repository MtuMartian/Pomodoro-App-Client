import React, { Component } from 'react';
import ProjectList from './ProjectList/ProjectList.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          ID: 0,
          name: 'Hello App',
          description: 'This is the starter app project... Yay!!!!!',
          goals: [

          ],
          sessions: [

          ]
        },
        {
          ID: 1,
          name: 'Foo Bar',
          description: 'This is a generic project',
          goals: [

          ],
          sessions: [

          ]
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-content">
          <ProjectList projects={this.state.projects} />
          <div className="column-lg">
            {null}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
