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
      restName: restName
    };
    this.changeView = this.changeView.bind(this);
  }


  changeView(id, options) {
    if (id === 999) {
      this.setState({ info: '', view: options });
    }
    else {

      $.ajax({
        url: `/api/restaurants/${id}`,
        method: 'GET',
        success: (resImages) => {
          this.setState({ info: resImages, view: options });
        },
      });
    }
  }

  renderView() {
    const { view } = this.state;

    if (view === 'imagePage') {
      return (
        <div>
          <button onClick={() => this.changeView(999, 'mainPage')}>Return to main</button>
          <div>
            <PhotoGallery imageList={this.state.info} />
          </div>

        </div>
      );
    }
    return (
      <div>
        {this.state.restName.map((pic) => (
          <button key={pic.id} onClick={() => this.changeView(pic.id, 'imagePage')}>{pic.name}</button>
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