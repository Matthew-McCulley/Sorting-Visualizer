import './App.css';
import Footer from './components/Footer';
import Frame from './components/Frame';
import { Provider } from 'react-redux';
import {useState} from 'react'
//provider
import store from './Store'

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Frame/>
        <Footer/>
      </div>
    </Provider>
  );
}

export default App;
