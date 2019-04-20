import React from 'react';
import $ from 'jquery';
import RestaurantName from './RestaurantName';
import '../../public/style.css';

class RestaurantList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article>
        <div className="line">
          <div>
            <table id="ListTable">
              <thead>
                <tr>
                  <th>Restaurant Name</th>
                  <th>View Gallery</th>
                </tr>
              </thead>
              <tbody>
                {this.props.data.map(rest => (
                  <RestaurantName
                    key={rest._id}
                    details={rest}
                    restClick={this.props.handleClick}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </article>
    );
  }
}

export default RestaurantList;
