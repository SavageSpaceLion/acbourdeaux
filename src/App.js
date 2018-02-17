import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";

import AppNav from "./components/AppNav";
import Home from "./pages/Home";
import OurStory from "./pages/OurStory";
import Party from "./pages/Party";
import RSVP from "./pages/RSVP";
import FAQs from "./pages/FAQs";
import ContactUs from "./pages/ContactUs";
import "./App.css";

const Wrapper = styled.div`
  background-color: #6ac4b8;
  height: 1000px;
  padding: 17px 17px;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <div className="App">
          <AppNav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/our-story" component={OurStory} />
            <Route exact path="/party" component={Party} />
            <Route exact path="/RSVP" component={RSVP} />
            <Route exact path="/faq" component={FAQs} />
            <Route exact path="/contact" component={ContactUs} />
          </Switch>
        </div>
      </Wrapper>
    );
  }
}

export default App;
