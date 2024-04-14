import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "./AppText";
import { MaterialCommunityIcons, FontAwesome6 } from "@expo/vector-icons";
import { colors } from "../constants/color.enum";

export default function ListITem({ title, icon }) {
  return (
    <View style={styles.container}>
      <View
        style={[styles.iconStyle, { backgroundColor: icon.backgroundColor }]}
      >
        <MaterialCommunityIcons name={icon.name} color={"white"} size={20} />
      </View>
      <View style={{ flex: 1 }}>
        <AppText color="dark">{title}</AppText>
      </View>
      <View style={{paddingRight : 8}}>
        <FontAwesome6  name="chevron-right" size={14} color={colors.gray} />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 10,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    columnGap : 10,
    paddingHorizontal : 10
  },
  iconStyle: {
    width: 40,
    height: 40,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
