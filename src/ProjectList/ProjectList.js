import React, { Component } from 'react';
import ProjectListItem from './ProjectListItem.js';
import '../App.css';

class ProjectList extends Component {
  render() {
    const projListItems = this.props.projects.map(proj =>
      <ProjectListItem item={proj}
        key={proj.ID} />
    );
    return (
        <div className="column-sm">
          <h1>Projects</h1>
          {projListItems}
        </div>
    )
  }
}

export default ProjectList;
