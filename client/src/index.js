/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

import Templates from "views/Template.js";
import Landing from "views/examples/Landing.js";
import Login from "views/examples/Login.js";
import Profile from "views/examples/Profile.js";
import Register from "views/examples/Register.js";
import About from "views/examples/About.js";
import Contact from "views/examples/Contact.js";
import Subscribe from "views/examples/Subscribe.js";
import ForgotPassword from "views/examples/ForgotPassword.js";

import ReactGA from 'react-ga';
const TRACKING_ID = "UA-199983595-3";

function Index ()  {
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])

  useEffect(() => {
   console.log(window.location.pathname)
  })

  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact render={props => <Landing {...props} />} />
      <Route
        path="/template"
        exact
        render={props => <Templates {...props} />}
      />
      <Route path="/login" exact render={props => <Login {...props} />} />
      <Route
        path="/profile"
        exact
        render={props => <Profile {...props} />}
      />
      <Route
        path="/register"
        exact
        render={props => <Register {...props} />}
      />
      <Route
        path="/about"
        exact
        render={props => <About {...props} />}
      />
      <Route
        path="/contact"
        exact
        render={props => <Contact {...props} />}
      />
      <Route
        path="/subscribe"
        exact
        render={props => <Subscribe {...props} />}
      />
      <Route
        path="/resetpassword"
        exact
        render={props => <ForgotPassword {...props} />}
      />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
  )

}

ReactDOM.render(
  <Index />,
  document.getElementById("root")
);
