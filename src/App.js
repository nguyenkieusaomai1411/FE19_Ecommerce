import React, {Component} from 'react';
import './css/style.css';
import {Footer} from "./components/footer/Footer";
import Header from "./components/header/Header";

class App extends Component {
  render() {
    return (
      <>
        <Header/>
        <Footer/>
      </>
    );
  }
}

export default App;
