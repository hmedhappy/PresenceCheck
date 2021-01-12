import React from 'react';
import ReactDOM from 'react-dom';
import Presence from './Presence'
import './css/index.css';
import './css/App.css';


ReactDOM.render(
  <React.StrictMode>
    <div className="App">
      <Presence />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

