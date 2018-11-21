import React from "react";
import { View, Text, TextInput } from "react-native";

const Field = props => {
  const { placeholder, label, onChangeText, value, secureTextEntry } = props;
  const { containerStyle, labelStyle, inputStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        style={inputStyle}
        placeholder={placeholder}
        // disable default autocorrect functionality
        autoCorrect={false}
        // secureTextEntry puts stars for letters on input field
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    //this sibling takes up 1/3 of the space
    flex: 1
  },
  inputStyle: {
    color: "#000",
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 18,
    lineHeight: 23,
    //this sibling takes up 2/3 of the space
    flex: 2
  }
};

export { Field };
