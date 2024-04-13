import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import Constants from "expo-constants";

export default function Screen({ children }) {
  return (
    <ScrollView keyboardShouldPersistTaps="handled" style={styles.container}>
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});
