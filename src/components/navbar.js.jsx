import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}
 
export const Navbar = () =>
  <div>
    <NavLink
      to="/"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Home</NavLink>
    <NavLink
      to="/wines"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Wines</NavLink>
    <NavLink
      to="/stores"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Stores</NavLink>
  </div>;