import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import IndexPage from "views/IndexPage/IndexPage";
import ComplaintsPage from "views/ComplaintsPage/ComplaintsPage";
import GrievancesPage from "views/GrievancesPage/GrievancesPage";
import ViewComplaints from "views/ViewComplaints/ViewComplaints";
import GrievancesSection from "views/GrievancSection/GrievancesSection";
import PolicyPage from "views/PolicyPage/PolicyPage";
import Members from "views/Members/Members";
var hist = createBrowserHistory();
// function isValidUser() {
//   const username = localStorage.getItem("username");
//   return !!username;
//   // let history = useHistory();
// }
ReactDOM.render(
  <Router history={hist}>
    <>
      <Switch>
        <Route path="/landing-page" component={LandingPage} />
        <Route path="/profile-page" component={ProfilePage} />
        <Route path="/complaints-page" component={ComplaintsPage} />
        <Route path="/about" component={GrievancesPage} />
        <Route path="/grievances-section" component={GrievancesSection} />
        <Route path="/policy" component={PolicyPage} />
        <Route path="/members" component={Members} />
        <Route path="/login-page" component={LoginPage} />
        <Route path="/view-complaints" component={ViewComplaints} />

        <Route path="/t" component={Components} />
        <Route path="/" component={IndexPage} />
      </Switch>
    </>
  </Router>,
  document.getElementById("root")
);
