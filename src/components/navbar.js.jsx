import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem, MenuItem } from 'react-bootstrap';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}
 
export const NavBar = () =>
  <div>
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#home">React-Bootstrap</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} href="#">
          Link
        </NavItem>
        <NavItem eventKey={2} href="#">
          Link
        </NavItem>
      </Nav>
    </Navbar>;
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