import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
// import { useRoute } from "@react-navigation/native";
import { feedData } from "../utils/setting";
import AppText from "../Components/AppText";
import Avatar from "../Components/Avatar/Avatar";
import FeedDetails from "../Components/FeedDetails";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function DetailsScreen() {
  const [data, setData] = useState(null);
  const route = useRoute();
  const navigation = useNavigation();
  const { id } = route.params;

  function findData(id) {
    const findData = feedData.find((item) => +item.id === +id);
    setData(findData);
  }

  useEffect(() => {
    if (id) findData(id);
  }, [id]);

  if (data)
    return (
      <View style={styles.container}>
        <Image source={data?.image} style={styles.image} />
        <FeedDetails data={data} />
        <View style={styles.avatarContainer}>
          <Avatar
            src={data.author?.src}
            isContent
            title={data?.author.title}
            course={data?.author.course}
            onPress={() => {
              navigation.navigate("Account");
            }}
          />
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    columnGap: 10,
  },
  image: {
    width: "100%",
    height: 350,
    objectFit: "cover",
  },
  avatarContainer: {
    marginTop: 40,
    padding: 10,
    paddingHorizontal: 20,
  },
});
