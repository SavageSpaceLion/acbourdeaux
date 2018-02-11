import React, { Component } from 'react';
import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';
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
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/our-story' component={OurStory} />
        </Switch>
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
            <Link to="/">Aria and Chris</Link>
          </Navbar.Brand>
        <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1}><Link to="/our-story">Our Story</Link></NavItem>
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

class Home extends Component {
  render() {
    return (
      <p>This is the home page</p>
    );
  }
}

class OurStory extends Component {
  render() {
    return (
      <p>This is our story</p>
    );
  }
}

export default App;
