import React, { Component } from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import logo from './logo.svg';
import './App.css';
import './bootstrap/css/bootstrap.min.css';
import './bootstrap/css/bootstrap-theme.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNav></AppNav>
      </div>
    );
  }
}

class AppNav extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Aria and Chris</a>
          </Navbar.Brand>
        <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">Our Story</NavItem>
            <NavItem eventKey={2} href="#">The Party</NavItem>
            <NavItem eventKey={3} href="#">I am so coming!</NavItem>
            <NavDropdown eventKey={4} title="Menu" id="menu">
              <MenuItem eventKey={4.1}>FAQs</MenuItem>
              <MenuItem eventKey={4.2}>Contact Us</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={4.3}>Admins</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default App;
