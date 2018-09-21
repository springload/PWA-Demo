import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      longitude: '',
      latitude: ''
    };
    this.getLocation = this.getLocation.bind(this);
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          var location = {
            longitude: position.coords.longitude,
            latitude: position.coords.latitude
          };

          const longitude2 = position.coords.longitude;
          const latitude2 = position.coords.latitude;

          this.setState({
            longitude: longitude2,
            latitude: latitude2
          });
          console.log(this.state);
        },
        error => {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              return 'User denied the request for Geolocation.';
              break;
            case error.POSITION_UNAVAILABLE:
              return 'Location information is unavailable.';
              break;
            case error.TIMEOUT:
              return 'The request to get user location timed out.';
              break;
            case error.UNKNOWN_ERROR:
              return 'An unknown error occurred.';
              break;
          }
        }
      );
    } else {
      console.log('Geo Location not supported by browser');
    }
  }

  render() {
    return (
      <div>
        <p>this is a form</p>
        <button onClick={this.getLocation}>Get location</button>
        <p>
          Location: {this.state.longitude} {this.state.latitude}
        </p>
      </div>
    );
  }
}

export default Form;
