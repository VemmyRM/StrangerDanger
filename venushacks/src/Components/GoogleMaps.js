import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  DirectionsRenderer,
} from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

function MyComponent() {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  });

  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);

  return (
    <LoadScript googleMapsApiKey="AIzaSyB5GC3ltAHoN99BD0nUPOSJ9T3HTav9e6U">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat: lat, lng: long }}
        zoom={10}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MyComponent);
