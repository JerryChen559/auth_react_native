import React from "react";
import { View } from "react-native";

const Card = props => {
  return <View style={styles.cardContainerStyle}>{props.children}</View>;
};

const styles = {
  cardContainerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    elevation: 4,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

export { Card };
