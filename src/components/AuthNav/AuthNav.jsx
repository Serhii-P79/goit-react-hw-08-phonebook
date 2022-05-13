import { Routes, Route, Link, NavLink } from 'react-router-dom';

export function AuthNav() {
  return (
    <div>
      <NavLink
        style={({ isActive }) => {
          return {
            display: 'inline-block',
            margin: '1rem 1rem',
            color: isActive ? 'red' : '',
          };
        }}
        to="/register"
      >
        Register
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return {
            display: 'inline-block',
            margin: '1rem 1rem',
            color: isActive ? 'red' : '',
          };
        }}
        to="/login"
      >
        Login
      </NavLink>
    </div>
  );
}
