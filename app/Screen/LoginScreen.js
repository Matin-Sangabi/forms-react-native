import React from "react";
import Screen from "../Container/Screen";
import { Image, StyleSheet, Text, View } from "react-native";
import AppButton from "../Components/AppButton";

export default function LoginScreen() {
  return (
    <Screen>
      <View style={styles.container}>
        <Image
          source={require("../assets/logo-red.png")}
          resizeMode="center"
          style={styles.loginImage}
        />
        <View style={styles.formProvider}>
          <Text>1</Text>
          <Text>1</Text>
          <AppButton onPress={() => console.log("press")}>Login</AppButton>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    rowGap: 20,
    padding: 10,
  },
  loginImage: {
    width: 80,
    marginTop: 50,
    marginBottom: 20,
    height: 80,
  },
  formProvider: {
    flexDirection: "column",
    rowGap: 12,
    width: "100%",
  },
});
