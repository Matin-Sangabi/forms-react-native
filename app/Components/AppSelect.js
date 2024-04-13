import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../constants/color.enum";
import SelectModal from "./SelectModal";
import { useFormContext } from "react-hook-form";
import { data } from "../utils/setting";
import { ErrorMessage } from "@hookform/error-message";
export default function AppSelect({ title, name, isRowSelect = false }) {
  const [openModal, setOpenModal] = useState(false);

  const {
    control,
    setValue,
    formState: { errors },
    getValues,
    clearErrors,
  } = useFormContext();
  // console.log(errors);

  const handleChange = (value, name) => {
    setValue(name, value);
    clearErrors(name);
  };


  return (
    <>
      <TouchableOpacity
        style={[
          styles.container,
          {
            borderWidth: errors[name] ? 1 : 0,
            borderColor: !!errors[name] ? colors.main : "",
          },
        ]}
        onPress={() => setOpenModal(true)}
      >
        <Text style={styles.color}>
          {getValues(name).length > 0 ? getValues(name) : title}
        </Text>
        <MaterialIcons name="arrow-drop-down" size={24} color={colors.gray} />
      </TouchableOpacity>
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <Text style={styles.erroMessage}>{message}</Text>
        )}
      />

      <SelectModal
        open={openModal}
        handleClose={() => setOpenModal(false)}
        data={data}
        onChange={(e) => handleChange(e, name)}
        isRowSelect={isRowSelect}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 10,
    height: 52,
    borderRadius: 30,
    backgroundColor: colors.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: 10,
  },
  color: {
    color: colors.gray,
    fontSize: 16,
    fontWeight: "500",
  },
  erroMessage: {
    color: colors.main,
  },
});
