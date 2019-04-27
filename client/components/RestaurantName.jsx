import React, { Component } from 'react';

class RestaurantName extends React.Component {
  render() {
    let name = this.props.details.name;
    let id = this.props.details.id;
    return (
      <tr>
        <td>{name}</td>
        <td>
          <a onClick={() => this.props.restClick(name, 'galleryInfo', id)}>check pictures</a>
        </td>
      </tr>
    );
  }
}

export default RestaurantName;
