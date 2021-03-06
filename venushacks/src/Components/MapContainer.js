/*global google*/
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from './CurrentLocation';

const mapStyles = {
  width: '10%',
  height: '10%'
};

export class MapContainer extends Component {
 
    state = {
        showingInfoWindow: false,  // Hides or shows the InfoWindow
        activeMarker: {},          // Shows the active marker upon click
        selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
      };
      onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
  
    onClose = props => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        });
      }
    };
  render() {
    return (

      

      <Map
        google={this.props.google}
        zoom={10}
        style={mapStyles}
        initialCenter={
          {
            lat: 37.4267861,
            lng: -122.0806032
          }
        }
      >
        
        <CurrentLocation
        centerAroundCurrentLocation
        google={this.props.google}
      >
      <Marker
          onClick={this.onMarkerClick}
          name={'Current Location'}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
        </CurrentLocation>
        </Map>
    );
  }
}

export default GoogleApiWrapper(
    (props) => ({
      apiKey: 'MY_API_KEY'
    }
  ))(MapContainer)

  

