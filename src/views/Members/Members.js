import React from "react";
import classNames from "classnames";
// import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/components.js";
const styles1 = {
  myAbout: {
    margin: 25 + "px " + 1 + "px " + 34 + "px " + 34 + "px"
  }
};

const useStyles1 = makeStyles(styles1);
const useStyles = makeStyles(styles);

export default function IndexPage(props) {
  const classes = useStyles();
  const classes1 = useStyles1();
  const { ...rest } = props;
  return (
    <>
      <Header
        brand="Grievance Cell"
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
      <div
        className={classNames(
          classes.main,
          classes.mainRaised,
          classes.aboutMargin
        )}
      >
        <GridContainer>
          <GridItem className={classes.aboutMargin}>
            <div className={classes1.myAbout}>
              <Typography variant="h3" component="h2" gutterBottom>
                About:
              </Typography>
              Grievances Redressal cell deals with all types of grievances,
              complaints and malpractices including those received from
              Students, Faculty and other Stakeholders.
              <Typography variant="h6" component="h2" gutterBottom>
                Roles and Responsibilities:
              </Typography>
              Grievance Redressal Cell has been dealing with the following
              matters:
              <ul>
                <li>Grievance of students/faculty of BIT.</li>
                <li>Complaints of Ragging.</li>
                <li>
                  Complaints of violation of rules and regulations of BIT.
                </li>
                <li>Complaints of harassment, discrimination etc.</li>
              </ul>
            </div>
          </GridItem>
        </GridContainer>
      </div>{" "}
      <Footer />
    </>
  );
}
