import { useState, useEffect } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { getPlaces } from './api';

function App() {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState(
    //{}
    {
      "lat": 46.94930073486168,
      "lng": 7.455610739553805
    }
  );
  const [bounds, setBounds] = useState(
    // null
    {//static bounds for test
      "ne": {
        "lat": 46.960337896574146,
        "lng": 7.451307207261493
      },
      "sw": {
        "lat": 46.944636199294024,
        "lng": 7.422639757310321
      }
    }
  );
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
    const filtered = places.filter((place) => place.rating > rate)
    setFilteredPlaces(filtered);
  }, [rate])


  useEffect(() => {
    if (bounds) {
      setIsLoading(true)
      getPlaces(type, bounds.sw, bounds.ne).then((data) => {
        setPlaces(data);
        setFilteredPlaces([])
        setIsLoading(false);
      })
    }
  }, [type])

  console.log(bounds)
  console.log(coordinates)
  console.log(places)
  return (
    <div className="App">
      <CssBaseline />
      <Header setCoordinates={setCoordinates} />
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
