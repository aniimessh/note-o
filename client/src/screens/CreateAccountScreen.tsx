import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Seperator from "../components/common/Seperator";
import AuthButton from "../components/buttons/AuthButton";

const CreateAccountScreen = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [otpSent, setOtpSent] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  // Email validation regex
  const isValidEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image source={require("../../assets/pics/logo.png")} />
        <Text style={styles.welcomeText}>Welcome to NoteO!</Text>
        <Text style={styles.subText}>Join now and manage your task easily</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            style={[
              styles.textInput,
              { borderColor: isFocused ? "#4E2FFF" : "#000" },
            ]}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            keyboardType="email-address"
            autoFocus
            editable={!otpSent}
            onChangeText={(text) => setEmail(text)}
          />
          {otpSent && (
            <TextInput
              placeholder="Password"
              style={[
                styles.textInput,
                { borderColor: isFocused ? "#4E2FFF" : "#000" },
                styles.passwordText,
              ]}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              keyboardType="default"
              secureTextEntry={true}
              editable={otpSent}
            />
          )}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[
              styles.continueButton,
              { backgroundColor: isValidEmail(email) ? "#4E2FFF" : "#ccc" }, // Change color based on validity
            ]}
            onPress={() => {
              if (isValidEmail(email)) {
                setOtpSent(true);
              }
            }}
            disabled={!isValidEmail(email)} // Disable button if email is invalid
          >
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
          {!otpSent && (
            <View style={styles.separatorContainer}>
              <Seperator />
            </View>
          )}
          {!otpSent && <AuthButton />}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateAccountScreen;

const styles = StyleSheet.create({
  safeArea: {
    height: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeText: {
    fontFamily: "outfitSemibold",
    fontSize: 16,
  },
  subText: {
    fontFamily: "outfitLight",
    fontSize: 12,
  },
  inputContainer: {
    width: "100%",
    marginVertical: 20,
    padding: 10,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 10,
    fontFamily: "outfitLight",
  },
  buttonContainer: {
    paddingHorizontal: 10,
    width: "100%",
  },
  continueButton: {
    width: "100%",
    paddingVertical: 16,
    borderRadius: 4,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontFamily: "outfitRegular",
    letterSpacing: 1,
  },
  separatorContainer: {
    marginVertical: 20,
  },
  passwordText: {
    marginTop: 10,
  },
});
