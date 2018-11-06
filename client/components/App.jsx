import React from "react";
import $ from "jquery";
import Gallery from "./Gallery";
import "../../public/style.css";

class PhotoApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Gallery />
      </div>
    );
  }
}

export default PhotoApp;
