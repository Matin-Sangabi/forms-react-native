import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Avatar from "../Components/Avatar/Avatar";
import { menuItems } from "../utils/setting";
import ListITem from "../Components/ListITem";
import ListSeparator from "../Components/ListSeparator";
import { colors } from "../constants/color.enum";
import Screen from "../Container/Screen";

export default function Account() {
  return (
    <Screen isSafeArea>
      <View style={styles.container}>
        <View style={styles.account}>
          <Avatar
            src={require("../assets/mosh.jpg")}
            title={"Mosh Hamedani"}
            isContent
            course={"programming@gmail.com"}
          />
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={menuItems}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => <ListITem {...item} />}
            ItemSeparatorComponent={<ListSeparator />}
          />
        </View>
        <View>
          <ListITem
            title={"Log Out"}
            icon={{ name: "logout", backgroundColor: colors.yellow }}
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    flexDirection: "column",
    rowGap: 10,
  },
  account: {
    marginTop: 20,
    paddingHorizontal: 15,
    paddingVertical : 20,
    width: " 100%",
    backgroundColor: colors.white,
  },
  listContainer: {
    marginTop: 15,
    marginBottom: 10,
  },
});
