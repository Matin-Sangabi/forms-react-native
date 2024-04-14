import React from "react";
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../../constants/color.enum";
export default function RowsSelect({ item , selectItem }) {
  return (
    <TouchableOpacity
      underlayColor={colors.gray}
      style={{ width: 100, height: 100 }}
      onPress={() => selectItem(item.title)}
    >
      <View style={[styles.container, { backgroundColor: item.color }]}>
        <MaterialIcons name={item.icon} size={34} color={colors.dark} />
        <Text style={{ color: colors.dark }}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    padding : 10,
    height: 100,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
});
