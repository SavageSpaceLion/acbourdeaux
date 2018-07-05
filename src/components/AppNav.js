import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "../bootstrap/css/bootstrap.min.css";
import "../bootstrap/css/bootstrap-theme.min.css";

class AppNav extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar fluid inverse collapseOnSelect>
          <Navbar.Header>
            <LinkContainer to="/party">
              <Navbar.Brand>Aria and Chris Wedding</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to="/party">
                <NavItem eventKey={1}>The Party</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default AppNav;
