import React from "react";
import {
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import ColumnSelect from "./Select/ColumnSelect";
import { colors } from "../constants/color.enum";
import RowsSelect from "./Select/RowsSelect";
export default function SelectModal({
  open = false,
  handleClose,
  data,
  onChange,
  isRowSelect = false,
  ...other
}) {
  return (
    <Modal
      style={{ width: "100%" }}
      animationType="slide"
      visible={open}
      transparent={true}
      {...other}
    >
      <View style={styles.container}>
        <TouchableOpacity onPress={handleClose} style={styles.closeBtn}>
          <AntDesign name="closecircle" size={24} color={colors.gray} />
        </TouchableOpacity>
        <View
          style={[
            styles.listItem,
            {
              flexDirection: isRowSelect ? "row" : "column",
              flexWrap: isRowSelect ? "wrap" : "nowrap",
            },
          ]}
        >
          {data.map((item) =>
            isRowSelect ? (
              <RowsSelect
                key={item.id}
                item={item}
                selectItem={(value) => {
                  onChange(value);
                  handleClose();
                }}
              />
            ) : (
              <ColumnSelect
                key={item.id}
                item={item}
                selectItem={(value) => {
                  onChange(value);
                  handleClose();
                }}
              />
            )
          )}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    height: "90%",
    padding: 20,
    backgroundColor: colors.white,
    flexDirection: "column",
    paddingTop: 20,
    rowGap: 20,
  },
  closeBtn: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  listItem: {
    display: "flex",
    rowGap: 14,
    columnGap: 10,
    width: "100%",
  },
});
