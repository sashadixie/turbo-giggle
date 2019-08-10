import React from 'react';
import './style.scss';

const MENU_ITEMS = [
  {
    name: 'User',
    icon: 'perm_identity',
  },
  {
    name: 'Settings',
    icon: 'settings',
  },
  {
    name: 'History',
    icon: 'history',
  },
];

const Sidebar = () => (
  <ul className="sidebar">
    {MENU_ITEMS.map(({ name, icon }) => (
      <li key={name}>
        <i className="material-icons">{icon}</i>
        <span>{name}</span>
      </li>
    ))}
  </ul>
);

export default Sidebar;
