import {
  Image,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import FeedDetails from "./FeedDetails";
import { colors } from "../constants/color.enum";
import { useNavigation } from "@react-navigation/native";

export default function CartITem({ item }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("FeedDetails", { id: item.id })}
      style={styles.container}
    >
      <Image source={item.image} style={styles.image} />
      <FeedDetails data={item} size={16} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    rowGap: 10,
    borderRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 10,
    shadowColor: colors.primary,
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
