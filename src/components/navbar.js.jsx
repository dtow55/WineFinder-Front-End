import React from 'react';
import { Navbar, Nav, NavItem, MenuItem } from 'react-bootstrap';

export const NavBar = () =>
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">WineFinder</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="/stores">
        Stores
      </NavItem>
      <NavItem eventKey={2} href="/wines">
        Wines
      </NavItem>
    </Nav>
  </Navbar>