import React,  { Component } from 'react';
import { AppRegistry } from 'react-native';
import Login from './Screens/Login';
import Home from './Screens/Home';


export default class App extends Component {
  state = {
    isLoggedIn: true
  }

  render() {
    if (this.state.isLoggedIn) {
      return <Home/>
    }
    else {
      return <Login/>;
    }
  }
}

AppRegistry.registerComponent(App, () => App);