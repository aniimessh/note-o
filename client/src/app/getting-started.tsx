import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const GettingStarted = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/pics/getting-started-bg.png")}
        style={styles.backgroundImage}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.welcomeText}>Welcome to Note.O</Text>
        <Text style={styles.titleText}>
          Unleash your thoughts, and complete your goal
        </Text>
        <TouchableOpacity style={styles.getStartedButton}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
        <Text style={styles.termsText}>
          By continuing, you accept our Terms of Services and acknowledge
          receipt of our Privacy Policy.
        </Text>
      </View>
    </View>
  );
};

export default GettingStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: "100%",
  },
  contentContainer: {
    padding: 10,
  },
  welcomeText: {
    fontFamily: "outfitSemibold",
    textAlign: "left",
    textTransform: "uppercase",
    letterSpacing: 1,
    opacity: 0.5,
  },
  titleText: {
    marginVertical: 30,
    fontFamily: "outfitBold",
    fontSize: 26,
  },
  getStartedButton: {
    borderRadius: 4,
    backgroundColor: "#4E2FFF",
  },
  buttonText: {
    textAlign: "center",
    paddingVertical: 19,
    fontFamily: "outfitRegular",
    color: "#fff",
  },
  termsText: {
    textAlign: "center",
    marginTop: 10,
  },
});
