import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import "@fontsource/yatra-one";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
});

export default theme;
