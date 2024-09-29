import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import LoadingScreen from "../screens/LoadingScreen";
import { Stack } from "expo-router";

/**
 * The root layout of the app.
 * It renders either the loading screen or the app screen depending on whether the fonts are loaded.
 */
const RootLayout = () => {
  const [fontLoaded] = useFonts({
    outfitRegular: require("../../assets/fonts/Outfit-Regular.ttf"),
    outfitSemibold: require("../../assets/fonts/Outfit-SemiBold.ttf"),
    outfitMedium: require("../../assets/fonts/Outfit-Medium.ttf"),
    outfitLight: require("../../assets/fonts/Outfit-Light.ttf"),
    outfitBold: require("../../assets/fonts/Outfit-Bold.ttf"),
  });

  // If the fonts are not loaded, show the loading screen

  if (!fontLoaded) {
    return <LoadingScreen />;
  }

  // If the fonts are loaded, show the app screen
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="auth" />
      <Stack.Screen name="getting-started" />
    </Stack>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
