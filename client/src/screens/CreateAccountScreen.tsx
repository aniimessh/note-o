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
import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";

const CreateAccountScreen = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigation = useNavigation(); // Initialize navigation

  const isValidEmail = (email: string): boolean => {
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
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            placeholder="Password"
            style={[
              styles.textInput,
              { borderColor: isFocused ? "#4E2FFF" : "#000" },
            ]}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[
              styles.continueButton,
              {
                backgroundColor:
                  isValidEmail(email) && password ? "#4E2FFF" : "#ccc",
              },
            ]}
            onPress={() => {
              if (isValidEmail(email) && password) {
                // Navigate to Getting Started page
                router.push("/getting-started");
              }
            }}
            disabled={!isValidEmail(email) || !password} // Disable button if email or password is invalid
          >
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
          <View style={styles.separatorContainer}>
            <Seperator />
          </View>
          <AuthButton />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateAccountScreen;

const styles = StyleSheet.create({
  safeArea: {
    height: "100%",
    backgroundColor: "#fff",
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
    marginBottom: 10, // Added spacing between inputs
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
});
