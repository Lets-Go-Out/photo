import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Gallery from './components/Gallery.jsx';
import restName from './components/restName';


// import './../public/style.css';


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


  changeView(id, options) {
    alert(id);
    if (id === 888) {
      this.setState({ info: '', view: options });
    } else {
      alert(id);
      $.ajax({
        url: `/api/restaurants/${id}`,
        method: 'GET',
        success: (resImages) => {
          console.log(resImages);
          this.setState({ info: resImages, view: options });
        },
      });
    }
  }

  renderView() {
    const { view } = this.state;

    if (view === 'imagesPage') {
      return (
        <div>
          <button onClick={() => this.changeView(888, 'mainPage')}>Return to main</button>
          <div>
            <Gallery imageList={this.state.info} />
          </div>

        </div>
      );
    }
    return (
      <div>
        {this.state.restName.map(pic => (
          <button key={pic.id} onClick={() => this.changeView(pic.id, 'imagesPage')}>{pic.name}</button>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div>

        <div>
          {this.renderView()}
        </div>
      </div>
    );
  }
}


// ReactDOM.render(<Gallery />, document.querySelector('.gallery-container'));
ReactDOM.render(<App />, document.querySelector('.gallery-container'));
