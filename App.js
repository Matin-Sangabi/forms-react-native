import React from "react";
// import RegisterScreen from './app/Screen/RegisterScreen'
import PostScreen from "./app/Screen/PostScreen";
import DetailsScreen from "./app/Screen/DetailsScreen";
import { NavigationContainer } from "@react-navigation/native";
import FeedScreen from "./app/Screen/FeedScreen";
import AccountScreen from "./app/Screen/AccountScreen";
import navigationTheme from "./app/constants/navigationTheme";
import TabProvider from "./app/Providers/TabProvider";
// import LoginScreen from './app/Screen/LoginScreen'

export default function App() {
  return <NavigationContainer theme={navigationTheme}>
    <TabProvider />
  </NavigationContainer>;
}
