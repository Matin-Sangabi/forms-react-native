import React from "react";
import { StyleSheet, Text, TouchableHighlight } from "react-native";
import { colors } from "../../constants/color.enum";
import { useFormContext } from "react-hook-form";

export default function ColumnSelect({ item, selectItem }) {
  const { getValues } = useFormContext();

  return (
    <TouchableHighlight
      underlayColor={colors.main}
      style={[
        styles.container,
        {
          backgroundColor:
            getValues("category") === item.title ? colors.main : "",
        },
      ]}
      onPress={() => selectItem(item.title)}
    >
      <Text style={colors.dark}>{item.title}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 4,
    borderRadius: 10,
  },
});
