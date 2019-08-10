import React, { Component } from "react";
import './style.scss';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <nav>
          <div className="logo">
            <i className="material-icons">menu</i>
            <span>Tasks</span>
          </div>
          <i className="material-icons">person</i>
        </nav>
      </header>
    );
  }
}

export default Header;
