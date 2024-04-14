import { StyleSheet, View } from "react-native";
import React from "react";
import AppText from "./AppText";

export default function FeedDetails({ data , size = 18 }) {
  return (
    <View style={styles.imageDetails}>
      <AppText fontWeight="700" color="dark" fontSize={size}>
        {data?.title}
      </AppText>
      <AppText color="secondary" fontSize={size} fontWeight="800">
        $ {data?.price}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  imageDetails: {
    flexDirection: "column",
    rowGap: 2,
    paddingHorizontal: 20,
    paddingTop: 6,
  },
});
