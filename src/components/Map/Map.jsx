import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";

import useStyles from "./styles.js";
import { LocationOn } from "@material-ui/icons";
import { Rating } from "@material-ui/lab";
const Map = ({
  coordinates,
  setCoordinates,
  setBounds,
  places,
  setChildClicked,
}) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery("(min-width:600px)");

  //"AIzaSyCBLPGhRPVMHvdLF9_3TP14hAuDJdIPLJ8"
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCBLPGhRPVMHvdLF9_3TP14hAuDJdIPLJ8" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={10}
        margin={[50, 50, 50, 50]}
        // options={""}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => {
          setChildClicked(child);
        }}
      >
        {places?.map((place, i) => (
          <div
            className={classes.markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {!isDesktop ? (
              <LocationOn
                style={{ color: "#1ae503dd" }}
                className={classes.pointer}
                fontSize="large"
              />
            ) : (
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="subtitle2" gutterBottom>
                  {place.name}
                </Typography>
                <img
                  className={classes.pointer}
                  src={
                    place.photo
                      ? place.photo.images.large.url
                      : "https://cdn.vox-cdn.com/thumbor/5d_RtADj8ncnVqh-afV3mU-XQv0=/0x0:1600x1067/1200x900/filters:focal(672x406:928x662)/cdn.vox-cdn.com/uploads/chorus_image/image/57698831/51951042270_78ea1e8590_h.7.jpg"
                  }
                  alt={place.name}
                />
                <Rating
                  size="small"
                  value={Number(place.rating)}
                  readOnly
                  style={{ justifyContent: "center" }}
                />
              </Paper>
            )}
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
