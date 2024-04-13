import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Form from "../Provider/FormProvider";
import Screen from "../Container/Screen";
import { useForm } from "react-hook-form";
import AppInput from "../Components/AppInput";
import AppButton from "../Components/AppButton";
import AppSelect from "../Components/AppSelect";

export default function PostScreen() {
  const postSchema = Yup.object().shape({
    title: Yup.string().required(),
    price: Yup.string().required(),
    category: Yup.string(),
    desc: Yup.string(),
  });

  const defaultValues = useMemo(
    () => ({ title: "", price: "", category: "", desc: "" }),
    []
  );

  const methods = useForm({ defaultValues, resolver: yupResolver(postSchema) });

  const { handleSubmit } = methods;

  const onSubmit = (data) => console.log(data);

  return (
    <Screen>
      <Form methods={methods}>
        <View style={styles.container}>
          <View style={styles.formProvider}>
            <AppInput name={"title"} placeholder={"Title"} />
            <AppInput
              name={"price"}
              placeholder={"Price"}
              type={"number-pad"}
            />
            {/* category here */}
            <AppSelect name={"category"} title={"Category"}  />
            <AppInput
              name={"desc"}
              multiline={true}
              numberOfLines={4}
              placeholder={"Description"}
            />
            <AppButton onPress={handleSubmit(onSubmit)}>Post</AppButton>
          </View>
        </View>
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    rowGap: 20,
    padding: 10,
    marginTop: 20,
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
