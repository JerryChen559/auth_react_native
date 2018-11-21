import React from "react";
import { View, ActivityIndicator } from "react-native";
//ActivityIndicator is the default RN Spinner.

const Spinner = ({ size }) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size || "large"} />
    </View>
  );
};

const styles = {
  spinnerStyle: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  }
};

export { Spinner };
