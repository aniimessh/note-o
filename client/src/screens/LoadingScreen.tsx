import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const LoadingScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image source={require("../../assets/pics/logo.png")} />
      <ActivityIndicator size="small" color="#000" style={styles.spinner} />
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  spinner: {
    marginTop: 20, // Adjusts the space between the image and the spinner
  },
});
