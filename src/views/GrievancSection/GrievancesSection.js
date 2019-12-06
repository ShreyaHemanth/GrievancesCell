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
                TYPES OF GRIEVANCES:
              </Typography>
              Grievances Redressal cell deals with all types of grievances,
              complaints and malpractices including those received from
              Students, Faculty and other Stakeholders.
              <Typography variant="h6" component="h2" gutterBottom>
                I. HARASSMENT:
              </Typography>
              Harassment covers a wide range of behaviours of an offensive
              nature. It is commonly understood as behaviour that demeans,
              humiliates or embarrasses a person, and it is characteristically
              identified by its unlikelihood in terms of social and moral
              reasonableness. There are many types if harassment:
              <ul>
                <li>
                  1. Physical Harassment: Physical harassment is one of the most
                  common types of harassment. This can also come in the form of
                  violence, both physically or to property. This can also be
                  threatening behaviour. In its extreme, it can even be termed
                  assault. A student or faculty may be physically abused, such
                  as pushing, punching or slapping, as well as other kinds of
                  physical abuse.
                </li>
                <li>
                  2. Discriminatory Harassment: This type of harassment is
                  directed at someone’s race, age, sex or some other form of
                  protected class who is subjected to offensive or intimidating
                  remarks. People need to be really careful today. You can
                  sometimes overhear someone say these kinds of statements in
                  private conversations. Discriminatory harassments are
                  particularly tricky to navigate, so it is best you get advice
                  from a lawyer for their expertise and guidance.
                </li>
                <li>
                  3. Sexual Harassment: Sexual harassment is when the
                  perpetrator behaves in a romantic or sexual way towards the
                  victim who is clearly uncomfortable and does not want
                  attention of this nature. There is also something known as
                  Quid Pro Quo sexual harassment where the superior makes a
                  sexual request to the victim and if not taken up, a threat of
                  something negative happening is made, such as losing their
                  internal marks or failing the subject.
                </li>
                <li>Complaints of harassment, discrimination etc.</li>
              </ul>
              <Typography variant="h6" component="h2" gutterBottom>
                II. LACK OF FACILITIES:
              </Typography>
              Lack of basic facilities like classrooms, drinking water, toilets,
              student-teacher ratio, well equipped laboratories, well educated
              faculties and so on. These complaints can be handled by making
              sure that all the facilities which are lacking are made available.
              <Typography variant="h6" component="h2" gutterBottom>
                III. DISPUTES:
              </Typography>
              Various types of kiriks such as verbal abuse, fighting, etc
              amongst the students and faculties. These complaints can be
              handles by resolving the disputes by making peace between the
              students or faculties.
              <Typography variant="h6" component="h2" gutterBottom>
                IV. DISCRIMINATION:
              </Typography>
              This type of harassment is directed at someone’s race, age, sex or
              some other form of protected class who is subjected to offensive
              or intimidating remarks. People need to be really careful today.
              You can sometimes overhear someone say these kinds of statements
              in private conversations. Discriminatory harassments are
              particularly tricky to navigate, so it is best you get advice from
              a lawyer for their expertise and guidance.
              <Typography variant="h6" component="h2" gutterBottom>
                V. NEGLIGENCE:
              </Typography>
              A failure to behave with the level of care that someone of
              ordinary prudence would have exercised under the same
              circumstances. The behaviour usually consists of actions, but can
              also consist of omissions when there is some duty to act (e.g., a
              duty to help victims of one's previous conduct.
            </div>
          </GridItem>
        </GridContainer>
      </div>{" "}
      <Footer />
    </>
  );
}
