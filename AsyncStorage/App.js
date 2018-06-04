import React, { Component } from "react";
import {
  Platform,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Text,
  Dimensions,
  View
} from "react-native";
import Splash from "./Splash";
import Login from "./Login";
import Register from "./Register";
import NewFeed from "./NewFeed";

import { createStackNavigator, createDrawerNavigator } from "react-navigation";

var { width, height } = Dimensions.get("window");

const HomeRoute = createStackNavigator(
  {
    SplashScreen: { screen: Splash },
    LoginScreen: { screen: Login },
    RegisterScreen: { screen: Register },
    NewFeedScreen: { screen: NewFeed }
  },
  {
    initialRouteName: "SplashScreen",
    headerMode: "none"
  }
);
const HomeMade = createDrawerNavigator(
  {
    Home: { screen: HomeRoute },
    Logout: { screen: Login }
  },
  {
    drawerBackgroundColor: "#eddcdc",
    drawerWidth: width - 100
  }
);



export default class App extends Component {
  render() {
    return <HomeMade />;
  }
}
