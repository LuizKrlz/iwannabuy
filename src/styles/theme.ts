import { createTheme } from "@shopify/restyle";
import commonTheme from "./common";

import palette from "./palette";

const theme = createTheme({
  ...commonTheme,
  colors: {
    bg: palette.white,
    primary: palette.primary,
    secondary: palette.secondary,
    white: palette.white,
    black: palette.black,
    gray: palette.gray,
    grayLight: palette.grayLight,
    red: palette.red,
    blue: palette.blue,
    title: palette.secondary,
    text: palette.gray,
    card: palette.grayExtraLight,
  },
});

export type Theme = typeof theme;
export default theme;
