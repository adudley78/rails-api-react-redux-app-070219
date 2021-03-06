import React from "react"
// import PropTypes from "prop-types"

import Navbar from './Navbar'
import Welcome from './pages/Welcome'
import ArticlesContainer from './containers/ArticlesContainer';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Provider } from 'react-redux';

import configureStore from './configureStore'
const store = configureStore();

class App extends React.Component {
  render () {  
    return (  
      <Provider store={store}>
        <Navbar />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => ("Home!")} />
            <Route exact path="/welcome" component={Welcome} />
            <Route exact path="/submit" component={ArticlesContainer} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App
