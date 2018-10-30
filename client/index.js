import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import PhotoGallery from './components/PhotoGallery.jsx';
import restName from './components/restName';

//import './../public/style.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      info: '',
      view: 'mainPage',
      restName,
    };
    this.changeView = this.changeView.bind(this);
  }

  // componentDidMount(){
  // 	$.ajax({
  //       url: '/api/restaurants/1',
  //       method: 'GET',
  //       success: (res_images)=>{
  //       	this.setState({info: res_images});
  //       }
  // 	});
  //    }
  changeView(id, options) {
    $.ajax({
      url: `/api/restaurants/${id}`,
      method: 'GET',
      success: (resImages) => {
        this.setState({ info: resImages, view: options });
      },
    });
  }

  renderView() {
    const { view } = this.state;

    if (view === 'imagePage') {
      return (
        <div>
          <button onClick={() => this.changeView(0, 'mainPage')}>Return to main</button>
          <div>
            <PhotoGallery imageList={this.state.info} />
          </div>

        </div>
      );
    }
    return (
      <div>
        {this.state.restName.map((pic) => (
          <button onClick={() => this.changeView(pic.id, 'imagePage')}>{pic.name}</button>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div>
       
        <div className="image-container">
          {this.renderView()}
        </div>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('photo'));
