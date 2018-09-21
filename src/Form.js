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
      </div>
    );
  }
}

export default Form;
