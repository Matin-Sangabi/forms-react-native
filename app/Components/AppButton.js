import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../constants/color.enum";

export default function AppButton({ onPress, children, ...other }) {
  return (
    <TouchableOpacity activeOpacity={0.5}  style={styles.button} onPress={onPress} {...other}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 12,
    width: "100%",
    borderRadius: 30,
    backgroundColor: colors.main,
  },
  buttonText: {
    color: colors.white,
    textAlign : "center",
    fontSize : 16
  },
});
