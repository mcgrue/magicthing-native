import React, { Component } from "react";
import { Provider } from "react-redux";

import store from "./app/store"; //Import the store
import Home from "./app/screens/Home"; //Import the component file

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

/* 
//todo: remove react-navigation from the package.json???
import { StackNavigator } from "react-navigation";

import LifeCounter from "./app/screens/LifeCounter";

const App = StackNavigator({
  Home: { screen: LifeCounter }
  //  Profile: { screen: ProfileScreen },
});
*/
