import React, { Component } from "react";
import { Text } from "react-native";
import firebase from "firebase";

import { Button, Card, CardSection, Field, Spinner } from "./common";

class LoginForm extends Component {
  state = {
    email: "",
    password: "",
    error: "",
    loading: false
  };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ loading: true });

    // attempt to sign in
    // new account created for new emails
    // return error message if password is wrong
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      // .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          // .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  // onLoginSuccess() {
  //   this.setState({
  //     email: "",
  //     password: "",
  //     error: "",
  //     loading: false
  //   });
  // }

  onLoginFail() {
    this.setState({
      error: "Authentication Failed.",
      loading: false
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    return <Button onPress={this.onButtonPress.bind(this)}>Login</Button>;
  }

  render() {
    console.log(this.state);

    return (
      <Card>
        <CardSection>
          <Field
            label="Email"
            placeholder="user@gmail.com"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Field
            label="Password"
            placeholder="password"
            secureTextEntry
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <CardSection>{this.renderButton()}</CardSection>

        {/* error message will only show when the user fails to log in. */}
        <Text style={styles.errorTextStyle}>{this.state.error}</Text>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    color: "red",
    alignSelf: "center"
  }
};

export default LoginForm;
