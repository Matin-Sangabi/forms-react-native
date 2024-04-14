import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import Constants from "expo-constants";

export default function Screen({ children , isSafeArea = false }) {
  if (!isSafeArea)
    return (
      <ScrollView keyboardShouldPersistTaps="handled" style={styles.container}>
        {children}
      </ScrollView>
    );
  return (
    <SafeAreaView style={styles.container}>
      {children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});
