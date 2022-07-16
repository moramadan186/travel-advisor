import { useState, useEffect } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { getPlaces } from './api';

function App() {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({
    lat: 40, lng: 20
  });
  const [bounds, setBounds] = useState({
    // "ne": {
    //   "lat": 40.207334348487564,
    //   "lng": 20.199594971121257
    // },
    // "sw": {
    //   "lat": 39.64284867504031,
    //   "lng": 19.243784424246257
    // }
  });
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState("restaurants");
  const [rate, setRate] = useState(0);
  const [filteredPlaces, setFilteredPlaces] = useState([])
  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
  //     setCoordinates({ lat: latitude, lng: longitude })
  //   })
  // }, [])

  useEffect(() => {
    const filteredPlaces = places.filter((place) => place.rating > rate)
    setFilteredPlaces(filteredPlaces);
  }, [rate])


  useEffect(() => {
    setIsLoading(true)
    getPlaces(type, bounds.sw, bounds.ne).then((data) => {
      setPlaces(data);
      setFilteredPlaces([])
      setIsLoading(false);
    })
  }, [])


  console.log(places)
  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List
            places={filteredPlaces.length ? filteredPlaces : places}
            childClicked={childClicked}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rate={rate}
            setRate={setRate}
          />
        </Grid>
        <Grid item xs={12} md={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Map
            places={filteredPlaces.length ? filteredPlaces : places}
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
