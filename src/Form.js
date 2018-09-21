import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      longitude: '',
      latitude: '',
      imageUpload: ''
    };
    this.getLocation = this.getLocation.bind(this);
    this.getImage = this.getImage.bind(this);
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

  getImage(event) {
    const selectedFile = event.target.files[0];
    const reader = new FileReader();

    const imgtag = document.getElementById('imagePreview');
    imgtag.title = selectedFile.name;

    reader.onload = function(event) {
      imgtag.src = event.target.result;
    };

    reader.readAsDataURL(selectedFile);

    this.setState({ imageUpload: selectedFile });
  }

  render() {
    return (
      <div className="form">
        <form>
          <div className="form-field">
            <label className="form-label">Location </label>
            <button
              className="button form-button"
              type="button"
              onClick={this.getLocation}
            >
              Get location
            </button>
            <input
              className="form-input"
              type="text"
              readOnly
              value={`${this.state.longitude} ${this.state.latitude}`}
            />
          </div>
          <div className="form-field">
            <label className="form-label">Image</label>
            <input
              className="form-input--file"
              id="imageUpload"
              type="file"
              accept="image/*"
              onChange={this.getImage}
            />
          <label htmlFor="imageUpload" className="button form-button">Choose file</label>
            <img
              id="imagePreview"
              className="form-image"
              src={this.state.imageUpload}
            />
          </div>
          <div className="form-field">
            <label className="form-label">Description</label>
            <textarea
              className="form-input form-input--textarea"
              rows="5"
              maxLength="5000"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
