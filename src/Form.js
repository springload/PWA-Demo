import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        var location = {
          longitude: position.coords.longitude,
          latitude: position.coords.latitude
        };
        console.log(location);
      });
    } else {
      console.log('Geo Location not supported by browser');
    }

    // console.log("click");
    // navigator.geolocation.getCurrentPosition(() => {console.log("success")}, () => {console.log("fail")})
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
