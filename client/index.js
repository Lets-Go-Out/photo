import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Gallery from './components/Gallery.jsx';
import Report from  './components/Report.jsx';
import '../public/style.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      info: '',
      view: 'mainPage',
      //showModal: false
    };

    this.changeView = this.changeView.bind(this);
    // this.handleCloseModal = this.handleCloseModal.bind(this);
    // this.handleOpenModal = this.handleOpenModal.bind(this);
  }

  componentDidMount() {
    const id2 = window.location.href.slice(38, -1);
    console.log(id2);
    this.changeView(id2);
  }

  
  changeView(id) {
    $.ajax({
      url: `http://localhost:3004/api/restaurants/${id}/hello`,
      method: 'GET',
      success: (resImages) => {
        // console.log('resImages', resImages);
        this.setState({ info: resImages });
        //console.log(this.state.info);
      },
    });
  }

  render() {
    let output;
    console.log('*****', this.state.info);
    if (this.state.info) {
      output = <Gallery imageList={this.state.info} />;
    } else {
      output = <div>Loading...</div>;
    }
    return (
      <div>
        <div>
          {output}
          
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('gallery-container'));
