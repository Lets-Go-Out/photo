import React from 'react';
import $ from 'jquery';
import Gallery from './Gallery';
import RestaurantList from './RestaurantList';
import '../../public/style.css';

class PhotoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'default',
      lastRest: '',
      imgs: null,
      data: []
    };
    this.restaurantHandler = this.restaurantHandler.bind(this);
    this.getRestaurantNames = this.getRestaurantNames.bind(this);
  }

  changeView(option) {
    this.setState({
      view: option
    });
  }

  restaurantHandler(rest, option, photos) {
    console.log(option);
    this.setState({
      view: option,
      lastRest: rest,
      imgs: photos
    });
  }

  getRestaurantNames() {
    $.ajax({
      method: 'GET',
      url: 'http://localhost:3004/restNames',
      success: data => {
        this.setState({
          data: data
        });
      }
    });
  }

  componentDidMount() {
    this.getRestaurantNames();
  }

  deleteFunc() {}

  renderView() {
    const { view, data } = this.state;
    if (view === 'default') {
      return (
        <div>
          <RestaurantList data={data} handleClick={this.restaurantHandler} />
        </div>
      );
    } else if (view === 'galleryInfo') {
      return (
        <Gallery
          imgs={this.state.imgs}
          desc={this.state.lastRest}
          restClick={this.restaurantHandler}
        />
      );
    }
  }

  render() {
    //const id2 = window.location.href.slice(34, -1);
    return <div>{this.renderView()}</div>;
  }
}

export default PhotoApp;
