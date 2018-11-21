// Authentication App: Using Firebase to set up sign-in method
// Note: Does not seem to have OAuth support for React Native,
// so using plain Email/Password.

import React, { Component } from "react";
import { View } from "react-native";
// import firebase from "firebase";
// import {
//   API_KEY,
//   AUTH_DOMAIN,
//   DATABASE_URL,
//   PROJECT_ID,
//   STORAGE_BUCKET,
//   MESSAGING_SENDER_ID
// } from "react-native-dotenv";

import { Header } from "./components/common";
import LoginForm from "./components/LoginForm";

class App extends Component {
  // state = {
  //   blah: []
  // };

  // componentDidMount() {
  // Initialize Firebase
  //   firebase.initializeApp({
  //     apiKey: API_KEY,
  //     authDomain: AUTH_DOMAIN,
  //     databaseURL: DATABASE_URL,
  //     projectId: PROJECT_ID,
  //     storageBucket: STORAGE_BUCKET,
  //     messagingSenderId: MESSAGING_SENDER_ID
  //   });
  // }

  render() {
    console.log(this.state);

    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
