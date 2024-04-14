import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../Container/Screen";
import { feedData } from "../utils/setting";
import CartITem from "../Components/CartITem";
import Separator from "../Components/Separator";
import { colors } from "../constants/color.enum";

export default function FeedScreen() {
  return (
    <Screen isSafeArea>
      <View style={styles.container}>
        <FlatList
          data={feedData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <CartITem item={item} />}
          ItemSeparatorComponent={<Separator />}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor : colors.primary
  },
});
