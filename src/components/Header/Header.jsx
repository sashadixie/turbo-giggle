import React, { Component } from "react";
import './style.scss';

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul className="sidebar">
            <li>User</li>
            <li>Settings</li>
            <li>History</li>
          </ul>
        </nav>
      </header>

    );
  }
}

export default Sidebar;
