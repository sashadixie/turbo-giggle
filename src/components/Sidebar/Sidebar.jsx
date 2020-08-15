import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const MENU_ITEMS = [
  {
    name: 'Tasks',
    icon: 'perm_identity',
    path: '/',
  },
  {
    name: 'Playground',
    icon: 'settings',
    path: '/playground',
  },
  // {
  //   name: 'History',
  //   icon: 'history',
  // },
];

const Sidebar = () => (
  <ul className="sidebar">
    {MENU_ITEMS.map(({ name, icon, path }) => (
      <li key={name}>
        <i className="material-icons">{icon}</i>
        <Link to={path}>{name}</Link>
      </li>
    ))}
  </ul>
);

export default Sidebar;
