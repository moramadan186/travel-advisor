import React, { useState, useEffect, createRef } from "react";
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
const List = ({
  places,
  childClicked,
  isLoading,
  type,
  setType,
  rate,
  setRate,
}) => {
  const classes = useStyles();
  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    setElRefs((refs) =>
      Array(places?.length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    );
  }, [places]);

  return isLoading ? (
    <div className={classes.loading}>
      <CircularProgress />
    </div>
  ) : (
    <>
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
            <Grid ref={elRefs[i]} item key={i} xs={12}>
              <PlaceDetials
                place={place}
                refProp={elRefs[i]}
                selected={Number(childClicked) === i}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default List;
