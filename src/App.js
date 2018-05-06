import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import logo from './logo.svg';
import './App.css';

const store = createStore(
  reducerFunction,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          Placeholder
        </div>
      </Provider>
    );
  }
}

export default App;
