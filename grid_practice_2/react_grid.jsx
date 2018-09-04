import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home';
// import App from './components/app';

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
	  <Home />,
	  document.getElementById('main')
  );
});
