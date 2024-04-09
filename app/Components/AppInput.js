import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../constants/color.enum";
import { Controller, useFormContext } from "react-hook-form";

export default function AppInput({
  icon,
  placeholder,
  type = "default",
  secureTextEntry = false,
  name,
  ...other
}) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <View style={styles.contiainer}>
          <View
            style={[
              styles.inputContainer,
              !!error && { borderWidth: 1, borderColor: colors.main },
            ]}
          >
            <MaterialIcons name={icon} size={24} color={colors.gray} />
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              style={styles.input}
              placeholder={placeholder}
              keyboardType={"default"}
              secureTextEntry={secureTextEntry}
              {...other}
            />
          </View>
          {!!error && <Text style={styles.erroMessage}>{error?.message}</Text>}
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  contiainer: {
    flexDirection: "column",
    rowGap: 6,
  },
  inputContainer: {
    padding: 10,
    borderRadius: 30,
    backgroundColor: colors.primary,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
  },
  input: {
    flex: 1,
    padding: 2,
    height: "100%",
    width: "100%",
    fontSize: 16,
    fontWeight: "500",
    color: colors.gray,
  },
  erroMessage: {
    color: colors.main,
    fontWeight: "600",
    paddingLeft: 10,
  },
});
