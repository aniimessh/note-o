import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { router } from "expo-router";
import Seperator from "../components/common/Seperator";
import AuthButton from "../components/buttons/AuthButton";

const AuthScreen = () => {
  return (
    <View>
      <View style={styles.container}>
        <View>
          <Image
            source={require("../../assets/pics/banner.png")}
            style={styles.banner}
          />
        </View>
        <View style={styles.textBox}>
          <Text style={styles.text}>Work, Task, Management</Text>
          <Text style={styles.text}>manage everything at one place</Text>
        </View>
        <View>
          <AuthButton />
          {/* Seperator */}
          <Seperator />

          {/* create account button */}
          <View
            style={{
              padding: 10,
            }}
          >
            <View style={styles.buttonContainer2}>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderRadius: 4,
                  paddingVertical: 14,
                  paddingHorizontal: 4,
                  width: "46%",
                }}
                onPress={() => router.push("/auth")}
              >
                <Text style={styles.centertext}>Create account</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderRadius: 4,
                  paddingVertical: 14,
                  paddingHorizontal: 18,
                  width: "46%",
                }}
              >
                <Text style={styles.centertext}>Log in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  banner: {
    width: "100%",
    height: 400,
  },
  textBox: {
    marginVertical: 20,
  },
  text: {
    textAlign: "center",
    fontFamily: "outfitSemibold",
    fontSize: 24,
    fontWeight: "600",
    lineHeight: 24,
    letterSpacing: 1.5,
  },
  buttonContainer2: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    opacity: 0.4,
  },
  centertext: {
    textAlign: "center",
    fontFamily: "outfitRegular",
    letterSpacing: 2,
  },
});
