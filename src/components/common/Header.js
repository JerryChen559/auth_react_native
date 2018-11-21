import React from "react";
import { View, Text } from "react-native";

const Header = props => {
  const { viewStyle, textStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    height: 60,
    paddingTop: 15,
    backgroundColor: "#F8F8F8",
    elevation: 8,
    position: "relative",
    justifyContent: "center",
    alignItems: "center"
  },
  textStyle: {
    fontSize: 20
  }
};

export { Header };
