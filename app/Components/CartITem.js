import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import FeedDetails from "./FeedDetails";
import { colors } from "../constants/color.enum";

export default function CartITem({ item }) {
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} />
      <FeedDetails data={item} size={16} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    rowGap: 10,
    borderRadius: 10,
    shadowOffset: { width: 10, height: 20 },
    shadowOpacity: 100,
    shadowColor: colors.dark,
    shadowRadius: 10,
    backgroundColor: colors.white,
    paddingBottom: 5,
  },
  image: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: "100%",
    height: 170,
    objectFit: "cover",
  },
});
