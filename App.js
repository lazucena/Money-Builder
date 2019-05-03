import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import Login from './screens/Login';
import Home from './screens/Home';

export default class App extends Component {
  state = {
    isLoggedIn: false
  }

  render() {

    if (this.state.isLoggedIn) {
      return <Home/>;        
    }
    else {
      return <Login/>;
    }
  }
}

AppRegistry.registerComponent(App, () => App);