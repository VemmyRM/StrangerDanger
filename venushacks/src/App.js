import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";

const mapStyles = {
  width: "50%",
  height: "50%",
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: -1.2884,
          lng: 36.8233,
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyB5GC3ltAHoN99BD0nUPOSJ9T3HTav9e6U",
})(MapContainer);
