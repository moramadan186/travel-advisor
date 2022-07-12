import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import useStyles from "./styles.js";
import { Autocomplete } from "@react-google-maps/api";

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Travel Advisor
        </Typography>
        <Box display="flex" alignItems="center">
          <Typography
            variant="h6"
            className={`${classes.title} ${classes.explore}`}
          >
            Explore new places
          </Typography>
          {/* <Autocomplete> */}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
          {/* </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
