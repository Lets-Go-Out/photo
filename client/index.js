import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';

const id2 = window.location.href.slice(38, -1);

ReactDOM.render(<App resId={id2}/>, document.getElementById('gallery-container'));
