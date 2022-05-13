import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = () => (
  <nav>
    <NavLink
      style={({ isActive }) => {
        return {
          display: 'inline-block',
          margin: '1rem 1rem',
          color: isActive ? 'red' : '',
        };
      }}
      to="/"
    >
      Home
    </NavLink>
    <NavLink
      style={({ isActive }) => {
        return {
          display: 'inline-block',
          margin: '1rem 1rem',
          color: isActive ? 'red' : '',
        };
      }}
      to="/contacts"
    >
      Contacts
    </NavLink>
  </nav>
);
