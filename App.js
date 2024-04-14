import React from 'react'
// import RegisterScreen from './app/Screen/RegisterScreen'
import PostScreen from './app/Screen/PostScreen'
import DetailsScreen from './app/Screen/DetailsScreen'
import {NavigationContainer} from "@react-navigation/native"
// import LoginScreen from './app/Screen/LoginScreen'

export default function App() {
  return (
    // <LoginScreen />
    // <RegisterScreen />
    <NavigationContainer>
      <DetailsScreen />
    </NavigationContainer>
  );
}
