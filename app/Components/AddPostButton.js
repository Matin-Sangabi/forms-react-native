import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../constants/color.enum";
import { FontAwesome5 } from "@expo/vector-icons";
export default function AddPostButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.container2}>
        <View style={styles.container3}>
          <FontAwesome5 name="plus" size={20} color={colors.main} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    backgroundColor: colors.white,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    bottom: 20,
  },
  container2: {
    width: 60,
    height: 60,
    backgroundColor: colors.main,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  container3: {
    width: 40,
    height: 40,
    backgroundColor: colors.white,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
