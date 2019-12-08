import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
// import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
// import GridContainer from "components/Grid/GridContainer.js";
// import GridItem from "components/Grid/GridItem.js";
// import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import {
  // BrowserRouter as Router,
  // Switch,
  // Route,
  // useParams
  Redirect
} from "react-router-dom";
import styles from "assets/jss/material-kit-react/views/components.js";
import ComplaintsTable from "./ComplaintsTable";
import { auth } from "../../services";

const useStyles = makeStyles(styles);
// function isValidUser() {
//   const username = localStorage.getItem("username");
//   return !!username;
//   // let history = useHistory();
// }
export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div>
      {!auth() && <Redirect to="/" />}
      <Header
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/profile-bg.jpg")} />

      <div className={classNames(classes.main, classes.mainRaised)}>
        <ComplaintsTable />
      </div>
      <Footer />
    </div>
  );
}
