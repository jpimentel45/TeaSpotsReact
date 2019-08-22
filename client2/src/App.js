import React from 'react';
import { Provider} from 'react-redux'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
    <div className="App">
    <Navbar />
        
    </div>
    </Provider>
    </BrowserRouter>
  );
}

export default App;
