import React from 'react';
import ReactDOM from 'react-dom';
import Grid from './components/grid';
import App from './components/app';

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
	  <App />,
	  document.getElementById('main')
  );
});
