import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import AppNav from "./components/AppNav";
import Home from "./pages/Home";
import OurStory from "./pages/OurStory";
import Party from "./pages/Party";
import RSVP from "./pages/RSVP";
import FAQs from "./pages/FAQs";
import ContactUs from "./pages/ContactUs";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="main-wrapper">
          <AppNav />
          <Switch>
            <Route exact path="/" component={Party} />
            <Route exact path="/our-story" component={OurStory} />
            <Route exact path="/party" component={Party} />
            <Route exact path="/RSVP" component={RSVP} />
            <Route exact path="/faq" component={FAQs} />
            <Route exact path="/contact" component={ContactUs} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
