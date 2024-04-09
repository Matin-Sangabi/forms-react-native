import React, { useMemo } from "react";
import Screen from "../Container/Screen";
import { Image, StyleSheet, View } from "react-native";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AppButton from "../Components/AppButton";
import AppInput from "../Components/AppInput";
import Form from "../Provider/FormProvider";

export default function LoginScreen() {
  const loginSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });

  const defaultValues = useMemo(
    () => ({
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
          <Image
            source={require("../assets/logo-red.png")}
            resizeMode="center"
            style={styles.loginImage}
          />
          <View style={styles.formProvider}>
            <AppInput
              name={"email"}
              placeholder={"Email"}
              type={"email-address"}
              icon={"email"}
            />
            <AppInput
              name={"password"}
              placeholder={"password"}
              icon={"lock"}
              secureTextEntry
            />
            <AppButton onPress={handleSubmit(onSubmit)}>Login</AppButton>
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
