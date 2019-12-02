/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Grievances"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              Harassment
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              Lack Of Facilities
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              Disputes
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              Discrimination
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              Negligence
            </Link>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/complaints-page" className={classes.navLink}>
          Complaints
        </Link>
        <Link to="/view-complaints" className={classes.navLink}>
          View Complaints
        </Link>
        <Link to="/" className={classes.navLink}>
          Policy
        </Link>
        <Link to="/" className={classes.navLink}>
          Members
        </Link>
      </ListItem>

   
       
    </List>
  );
}
