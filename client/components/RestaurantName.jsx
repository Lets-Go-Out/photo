import React, { Component } from 'react';

class RestaurantName extends React.Component {
  render() {
    let name = this.props.details.name;
    console.log(this.props.details.photoobj[0]);
    let photos = JSON.parse(this.props.details.photoobj)[0];
    return (
      <tr>
        <td>{name}</td>
        <td>
          <a onClick={() => this.props.restClick(name, 'galleryInfo', photos)}>check pictures</a>
        </td>
      </tr>
    );
  }
}

export default RestaurantName;
