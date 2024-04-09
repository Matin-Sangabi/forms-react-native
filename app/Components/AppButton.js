import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../constants/color.enum";

export default function AppButton({ onPress, children, ...other }) {
  return (
    <TouchableOpacity  style={styles.button} onPress={onPress} {...other}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    width: "100%",
    borderRadius: 20,
    backgroundColor: colors.main,
  },
  buttonText: {
    color: colors.white,
    textAlign : "center",
    fontSize : 16
  },
});
