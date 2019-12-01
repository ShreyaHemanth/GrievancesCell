import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
// import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import { Email, People, Phone, School, Class } from "@material-ui/icons";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel
} from "@material-ui/core";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import useForm from "hooks/useForm";
import axio from "axios";

import image from "assets/img/bg7.jpg";

const useStyles = makeStyles(styles);

export default function ComplaintsPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  var [form, setForm] = useState({
    usn: "",
    name: "",
    sem: "",
    branch: "",
    phoneno: "",
    email: "",
    details: "",
    gender: ""
  });
  const handleChange = event => {
    event.persist();
    setForm(form => ({
      ...form,
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value
    }));

    console.log(form);
  };
  const handleSubmit = event => {
    axio.put("http://localhost:8000/complaints", form).then(() =>
      setForm({
        usn: "",
        name: "",
        sem: "",
        branch: "",
        phoneno: "",
        email: "",
        details: "",
        gender: ""
      })
    );
  };
  // const [form, handleChange, handleSubmit] = useForm();

  // const handleChange = event => {
  //   setValue(event.target.value);
  // };
  const { ...rest } = props;
  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="Grievance Cell"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={12}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Complaints</h4>
                  </CardHeader>
                  <p className={classes.divider}>Be Honest</p>
                  <CardBody>
                    <GridContainer>
                      <GridItem xs={3}>
                        <CustomInput
                          labelText="USN"
                          name="usn"
                          value={form.usn}
                          onChange={handleChange}
                          id="first"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <People className={classes.inputIconsColor} />
                              </InputAdornment>
                            )
                          }}
                        />
                      </GridItem>
                      <GridItem xs={3}>
                        <CustomInput
                          labelText="Name..."
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          id="first"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            type: "text",
                            endAdornment: (
                              <InputAdornment position="end">
                                <People className={classes.inputIconsColor} />
                              </InputAdornment>
                            )
                          }}
                        />
                      </GridItem>
                      <GridItem xs={3}>
                        <CustomInput
                          labelText="Branch..."
                          name="branch"
                          value={form.branch}
                          onChange={handleChange}
                          id="first"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            type: "text",
                            endAdornment: (
                              <InputAdornment position="end">
                                <Class className={classes.inputIconsColor} />
                              </InputAdornment>
                            )
                          }}
                        />
                      </GridItem>
                      <GridItem xs={3}>
                        <CustomInput
                          labelText="Sem..."
                          name="sem"
                          value={form.sem}
                          onChange={handleChange}
                          id="first"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            type: "number",
                            endAdornment: (
                              <InputAdornment position="end">
                                <School className={classes.inputIconsColor} />
                              </InputAdornment>
                            )
                          }}
                        />
                      </GridItem>
                    </GridContainer>

                    <GridContainer
                      container
                      direction="row"
                      justify="space-evenly"
                      alignItems="baseline"
                    >
                      <GridItem xs={1}>
                        <FormLabel component="legend">Gender</FormLabel>
                      </GridItem>
                      <GridItem xs={5}>
                        <FormControl component="fieldset">
                          <RadioGroup
                            aria-label="gender"
                            name="gender"
                            value={form.gender}
                            onChange={handleChange}
                            row
                          >
                            <FormControlLabel
                              value="female"
                              control={<Radio />}
                              label="Female"
                            />
                            <FormControlLabel
                              value="male"
                              control={<Radio />}
                              label="Male"
                            />
                            <FormControlLabel
                              value="other"
                              control={<Radio />}
                              label="Other"
                            />
                          </RadioGroup>
                        </FormControl>
                      </GridItem>
                      <GridItem xs={3}>
                        <CustomInput
                          labelText="Phone NO..."
                          name="phoneno"
                          value={form.phoneno}
                          onChange={handleChange}
                          id="first"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            type: "text",
                            endAdornment: (
                              <InputAdornment position="end">
                                <Phone className={classes.inputIconsColor} />
                              </InputAdornment>
                            )
                          }}
                        />
                      </GridItem>
                      <GridItem xs={3}>
                        <CustomInput
                          labelText="E Mail..."
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          id="first"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            type: "email",
                            endAdornment: (
                              <InputAdornment position="end">
                                <Email className={classes.inputIconsColor} />
                              </InputAdornment>
                            )
                          }}
                        />
                      </GridItem>
                    </GridContainer>
                    <CustomInput
                      labelText="Details..."
                      name="details"
                      value={form.details}
                      onChange={handleChange}
                      id="first"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        multiline: true,
                        rows: 5,
                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button
                      round
                      color="primary"
                      size="lg"
                      onClick={handleSubmit}
                    >
                      Submit
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
