import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const AuthButton = () => {
  return (
    <View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.authButton}>
          <View style={styles.buttonTitle}>
            <Image source={require("../../../assets/pics/Google.png")} />
            <Text style={styles.btnText}>Continue with Google</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.authButton}>
          <View style={styles.buttonTitle}>
            <Image source={require("../../../assets/pics/Apple.png")} />
            <Text style={styles.btnText}>Continue with Apple</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AuthButton;

const styles = StyleSheet.create({
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  authButton: {
    backgroundColor: "#000",
    borderRadius: 4,
    paddingVertical: 14,
  },
  buttonTitle: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
  },
  btnText: {
    textAlign: "center",
    fontFamily: "outfitSemibold",
    fontSize: 12,
    color: "#fff",
    letterSpacing: 2,
  },
});
