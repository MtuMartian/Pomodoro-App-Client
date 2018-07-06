import React, { Component } from 'react';
import '../App.css';

class ProjectListItem extends Component {
  render() {
    const item = this.props.item;
    return (
      <div>
        <h3>{item.name}</h3>
        <p className="detail">{item.description}</p>
      </div>
    );
  }
}

export default ProjectListItem;
