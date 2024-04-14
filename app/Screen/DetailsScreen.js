import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
// import { useRoute } from "@react-navigation/native";
import { feedData } from "../utils/setting";
import AppText from "../Components/AppText";
import Avatar from "../Components/Avatar/Avatar";

export default function DetailsScreen() {
  const [data, setData] = useState(null);
//   const route = useRoute();
  const  id  =  2;

  function findData(id) {
    console.log(id)
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
        <View style={styles.imageDetails}>
          <AppText fontWeight="700" color="dark" fontSize={18}>
            {data?.title}
          </AppText>
          <AppText color="secondary" fontSize={18} fontWeight="800">
            $ {data?.price} 
          </AppText>
        </View>
        <View style={styles.avatarContainer}>
          <Avatar
            src={data.author?.src}
            isContent
            title={data?.author.title}
            course={data?.author.course}
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
  imageDetails: {
    flexDirection: "column",
    rowGap: 2,
    paddingHorizontal : 20,
    paddingTop : 6
  },
  avatarContainer: {
    marginTop: 40,
    padding: 10,
    paddingHorizontal : 20
  },
});
