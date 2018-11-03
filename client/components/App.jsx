import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Gallery from './Gallery.jsx';
import Report from  './Report.jsx';
import '../../public/style.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: '',
    };
  }

  componentDidMount() {
    //const id2 = window.location.href.slice(38, -1);
    const id2 = this.props.resId;
    $.ajax({
      url: `http://localhost:3004/api/restaurants/${id2}/hello`,
      method: 'GET',
      success: (resImages) => {
        this.setState({ info: resImages });
      },
    });
  }

  render() {
    let output;
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

export default App;