import React, { useMemo } from "react";
import Screen from "../Container/Screen";
import { Image, StyleSheet, View } from "react-native";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AppButton from "../Components/AppButton";
import AppInput from "../Components/AppInput";
import Form from "../Provider/FormProvider";

export default function RegisterScreen() {
  const loginSchema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });

  const defaultValues = useMemo(
    () => ({
      name: "",
      email: "",
      password: "",
    }),
    []
  );

  const methods = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues,
  });

  const { handleSubmit, control } = methods;

  const onSubmit = (data) => console.log(data);

  return (
    <Screen>
      <Form methods={methods}>
        <View style={styles.container}>
          <View style={styles.formProvider}>
            <AppInput name={"name"} placeholder={"Name"} icon={"person"} />
            <AppInput
              name={"email"}
              placeholder={"Email"}
              type={"email-address"}
              icon={"email"}
              inputMode="email"
            />
            <AppInput
              name={"password"}
              placeholder={"password"}
              icon={"lock"}
              secureTextEntry
            />
            <AppButton onPress={handleSubmit(onSubmit)}>Register</AppButton>
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
