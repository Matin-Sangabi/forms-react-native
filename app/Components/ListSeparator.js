import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../constants/color.enum";

export default function ListSeparator() {
  return (
    <View
      style={{
        width: "100%",
        margin: "auto",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View style={{ height: 0.5, backgroundColor: colors.lightGray  , width : "90%"}}></View>
    </View>
  );
}

const styles = StyleSheet.create({});
