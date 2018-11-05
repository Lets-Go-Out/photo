import React from 'react';
import ReactDOM from 'react-dom';

import PhotoApp from './components/App';

const id2 = window.location.href.slice(38, -1);

ReactDOM.render(<PhotoApp resId={id2} />, document.getElementById('gallery-container'));
