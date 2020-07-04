import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  render() {
    return (
      <div
        style={{
          height: "30rem",
          maxWidth: "30rem",
          margin: " 1rem auto 3rem",
        }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {/* <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" /> */}
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
