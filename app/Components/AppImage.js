import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { colors } from "../constants/color.enum";

export default function AppImage({ name }) {
  const {
    formState: { errors },
    setValue,
    clearErrors,
    getValues,
  } = useFormContext();

  const imageValue = getValues(name);
  const imagePickerHandler = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.canceled) {
        // set images
        const newImage = result.assets[0].uri;
        setValue(name, [newImage, ...imageValue]);
        clearErrors(name);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.rowImage}>
        <TouchableOpacity
          style={styles.imagePicker}
          onPress={imagePickerHandler}
        >
          <FontAwesome name="camera" size={24} color="black" />
        </TouchableOpacity>
        <ScrollView scrollEventThrottle={200} horizontal={true}>
          {imageValue && imageValue.length !== 0
            ? imageValue.map((item, index) => (
                <Image
                  style={styles.image}
                  source={{ uri: item }}
                  key={index}
                />
              ))
            : null}
        </ScrollView>
      </View>
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <Text style={styles.erroMessage}>{message}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    rowGap: 4,
    width: "100%",
  },
  rowImage: {
    display: "flex",
    flexDirection: "row",

    columnGap: 10,
  },
  imagePicker: {
    width: 90,
    height: 90,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: colors.primary,
  },
  image: {
    width: 90,
    height: 90,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginHorizontal: 4,
  },
  erroMessage: {
    paddingHorizontal : 10,
    color: colors.main,
  },
});
