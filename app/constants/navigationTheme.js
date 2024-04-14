import { DefaultTheme } from "@react-navigation/native";
import { colors } from "./color.enum";

export default Object.freeze({
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.main,
    background: colors.white,
  },
});
