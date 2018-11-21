import React, { Component } from "react";
import { Text, TextInput } from "react-native";

import { Button, Card, CardSection, Field } from "./common";

class LoginForm extends Component {
  state = {
    email: "",
    password: "",
    name: ""
  };

  render() {
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

        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
