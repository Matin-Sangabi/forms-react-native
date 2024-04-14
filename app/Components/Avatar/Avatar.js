import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome6 } from "@expo/vector-icons";
import { colors } from "../../constants/color.enum";
import AppText from "../AppText";
export default function Avatar({ src, isContent = false, title, course }) {
  return (
    <View style={styles.container}>
      <View>
        {src && src.length !== 0 ? (
          <Image source={src} style={styles.image} />
        ) : (
          <View style={styles.image}>
            <FontAwesome6 name="user-large" size={18} color={colors.dark} />
          </View>
        )}
      </View>
      {isContent && (
        <>
          <View style={styles.contentContainer}>
            <View style={styles.contentText}>
              <AppText color="dark" fontWeight="600">
                {title}
              </AppText>
              <AppText color="gray" fontWeight="600" fontSize={14}>
                {course}
              </AppText>
            </View>
          </View>
          <FontAwesome6 name="chevron-right" size={18} color={colors.dark} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    columnGap: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 60,
    height: 60,
    backgroundColor: colors.lightGray,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    flex : 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  contentText: {
    flexDirection: "column",
    rowGap: 2,
  },
});