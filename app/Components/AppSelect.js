import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../constants/color.enum";
import SelectModal from "./SelectModal";
import { useFormContext } from "react-hook-form";
export default function AppSelect({ title, name }) {
  const [openModal, setOpenModal] = useState(false);

  const {
    setValue,
    formState: { errors },
    getValues,
  } = useFormContext();
  // console.log(errors);

  const handleChange = (value, name) => {
    console.log(value);
    setValue(name, value);
  };

  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => setOpenModal(true)}
      >
        <Text style={styles.color}>
          {getValues(name).length > 0 ? getValues(name) : title}
        </Text>
        <MaterialIcons name="arrow-drop-down" size={24} color={colors.gray} />
      </TouchableOpacity>
      <SelectModal
        open={openModal}
        handleClose={() => setOpenModal(false)}
        data={data}
        onChange={(e) => handleChange(e, name)}
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
    fontWeight: "700",
  },
});

const data = [
  { id: "1", title: "test 1" },
  { id: "2", title: "test 2" },
  { id: "3", title: "test 3" },
  { id: "4", title: "test 4" },
];
