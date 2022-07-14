import React, { useState } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import PlaceDetials from "./../PlaceDetails/PlaceDetials";

import useStyles from "./styles";
const List = ({ places }) => {
  const classes = useStyles();
  const [type, setType] = useState("restaurants");
  const [rate, setRate] = useState(0);
  // const places = [
  //   { name: "first place" },
  //   { name: "second place" },
  //   { name: "third place" },
  //   { name: "first place" },
  //   { name: "second place" },
  //   { name: "third place" },
  //   { name: "first place" },
  //   { name: "second place" },
  //   { name: "third place" },
  //   { name: "first place" },
  //   { name: "second place" },
  //   { name: "third place" },
  // ];
  return (
    <div className={classes.container}>
      <Typography variant="h6">
        Restaurants, Hotels & Attractions around you
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select value={rate} onChange={(e) => setRate(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, i) => (
          <Grid item key={i} xs={12}>
            <PlaceDetials place={place} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default List;
