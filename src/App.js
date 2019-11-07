import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Router from './router'
import { Provider } from 'react-redux'
import createStore from './store/index'
const defaultStore = window.__STORE__ || {}
const store = createStore(defaultStore);

function App() {
  return (
    <div className="App">
        <Provider store={store}>
            <BrowserRouter>
                <Router/>
            </BrowserRouter>,
        </Provider>
    </div>
  );
}

export default App;
