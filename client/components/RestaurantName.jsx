import React, { Component } from 'react';

class RestaurantName extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.details.restName}</td>
        <td>
          <a onClick={() => this.props.restClick(this.props.details, 'galleryInfo')}>
            check pictures
          </a>
        </td>
      </tr>
    );
  }
}

export default RestaurantName;
