import React from "react";
import { Component } from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "../bootstrap/css/bootstrap.min.css";
import "../bootstrap/css/bootstrap-theme.min.css";

class AppNav extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <LinkContainer to="/">
            <Navbar.Brand>Aria and Chris</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/our-story">
              <NavItem eventKey={1}>Our Story</NavItem>
            </LinkContainer>
            <LinkContainer to="/party">
              <NavItem eventKey={2}>The Party</NavItem>
            </LinkContainer>
            <LinkContainer to="/RSVP">
              <NavItem eventKey={3}>I am so coming!</NavItem>
            </LinkContainer>
            <NavDropdown eventKey={4} title="Menu" id="menu">
              <LinkContainer to="/FAQs">
                <MenuItem eventKey={4.1}>FAQ's</MenuItem>
              </LinkContainer>
              <LinkContainer to="/contact">
                <MenuItem eventKey={4.2}>Contact Us</MenuItem>
              </LinkContainer>
              <MenuItem divider />
              <MenuItem eventKey={4.3}>Admins</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default AppNav;
