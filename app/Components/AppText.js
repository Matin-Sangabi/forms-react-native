import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../constants/color.enum";

export default function AppText({
  children,
  color = "primary",
  fontSize = 16,
  fontWeight = "500",
  ...other
}) {
  return (
    <Text
      style={{
        color: colors[color],
        fontSize: fontSize,
        fontWeight: fontWeight,
      }}
      {...other}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({});
