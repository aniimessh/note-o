import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {
  orReq?: boolean;
};

const Seperator = ({ orReq = true }: Props) => {
  return (
    <View style={styles.seperatorContainer}>
      <View style={styles.seperator} />
      {orReq ? <Text style={styles.seperatorText}>OR</Text> : null}
      <View style={styles.seperator} />
    </View>
  );
};

export default Seperator;

const styles = StyleSheet.create({
  seperatorContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  seperator: {
    height: 1,
    width: "30%",
    backgroundColor: "#000",
  },
  seperatorText: {
    fontFamily: "outfitRegular",
  },
});
