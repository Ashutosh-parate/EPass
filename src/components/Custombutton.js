import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function CustomButton({
  onPress,
  Buttontext,
  bgColor,
  fgColor,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, bgColor ? { backgroundColor: bgColor } : {}]}
    >
      <Text style={[styles.text, fgColor ? { color: fgColor } : {}]}>
        {Buttontext}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3B71F3",
    width: "90%",
    padding: 15,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 5,
  },
  text: {
    fontWeight: "bold",
    color: "white",
  },
});
