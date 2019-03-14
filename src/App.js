import React, {Component} from 'react';
import './css/style.css';
import {Footer} from "./components/footer/Footer";
import Header from "./components/header/Header";
import List from './components/list/List';
import Contact from './components/contact/Contact';
import Blog from './components/blog/Blog';
import Register from './components/register/Register';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';

class App extends Component {
  render() {
    return (
        <Router>
        <div>
          <Header/>
          <Route path='/list' component={List}/>
          <Route path='/home' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/blog' component={Blog}/>
          <Route path='/register' component={Register}/>
          <Footer/>
        </div>
        </Router>
    );
  }
}

export default App;
