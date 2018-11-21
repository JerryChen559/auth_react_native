// Authentication App: Using Firebase to set up sign-in method
// Note: Does not seem to have OAuth support for React Native,
// so using plain Email/Password on Firebase.

import React, { Component } from "react";
import { View } from "react-native";
import firebase from "firebase";

import { Header, Button, CardSection, Spinner } from "./components/common";
import LoginForm from "./components/LoginForm";

class App extends Component {
  state = {
    loggedIn: null
  };

  componentDidMount() {
    // Initialize Firebase
    firebase.initializeApp({
      apiKey: _,
      authDomain: _,
      databaseURL: _,
      projectId: _,
      storageBucket: _,
      messagingSenderId: _
    });

    //one event handler to handle signing in and signing out.
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <CardSection>
            <Spinner size="large" />
          </CardSection>
        );
    }
  }

  render() {
    console.log(this.state);

    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
