import React, {Component} from 'react';
import './css/style.css';
import {render} from 'react-dom'
import {Footer} from "./components/footer/Footer";
import Header from "./components/header/Header";
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import {getProduct, productReduce} from "./reducers/productReducer";
import ListProduct from "./containers/home/ListProduct";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas/productSaga";
import {rootReducer} from "./reducers/rootReducer";
import List from './components/list/List';
import Contact from './components/contact/Contact';
import Blog from './components/blog/Blog';
import Register from './components/register/Register';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(sagaMiddleware,)
  )
)
sagaMiddleware.run(rootSaga);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Header/>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path='/list' component={List}/>
              <Route path='/about' component={About}/>
              <Route path='/contact' component={Contact}/>
              <Route path='/blog' component={Blog}/>
              <Route path='/register' component={Register}/>
            </Switch>
            <Footer/>
          </div>
        </Router>
      </Provider>
    );
  }
}
