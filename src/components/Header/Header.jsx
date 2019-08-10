import React from 'react';
import './style.scss';

const Header = () => (
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

export default Header;
