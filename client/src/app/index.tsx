import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import AuthScreen from "../screens/AuthScreen";

const { height } = Dimensions.get("window");

const IndexScreen = () => {
  return (
    <ScrollView
      style={{
        backgroundColor: "#fff",
      }}
    >
      <View
        style={{
          height: height,
        }}
      >
        <AuthScreen />
      </View>
    </ScrollView>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({});
