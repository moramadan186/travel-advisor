import React from "react";
import GoogleMapReact from "google-map-react";
import { useMediaQuery } from "@material-ui/core";

import useStyles from "./styles.js";
const Map = ({ coordinates, setCoordinates, setBounds }) => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width:600px)");
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
        // onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
