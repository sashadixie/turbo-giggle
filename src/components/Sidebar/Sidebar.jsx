import React, { Component } from "react";
import './style.scss';

class Sidebar extends Component {
  render() {
    return (
      <ul className="sidebar">
        <li>User</li>
        <li>Settings</li>
        <li>History</li>
      </ul>
    );
  }
}

export default Sidebar;
