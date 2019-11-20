import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";

import configureStore from "@store/configureStore";

const getSavedFaves = () => {
  const saved = localStorage.getItem("faves");

  if (saved) {
    return JSON.parse(saved);
  }

  return [];
}

const history = createBrowserHistory();
const store = configureStore({ favorites: getSavedFaves(), isFetching: false });

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
