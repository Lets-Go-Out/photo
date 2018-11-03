import React from 'react';
import $ from 'jquery';
import Gallery from './Gallery';
import '../../public/style.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: '',
    };
  }

  componentDidMount() {
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
    const { info } = this.state;
    let output;
    if (info) {
      output = <Gallery imageList={info} />;
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
