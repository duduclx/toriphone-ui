import { extendTheme } from "@chakra-ui/react";

const Theme = extendTheme({
  colors: {
    pageBg: {
      light: "#FFF",
      dark: "#232323"
    },
    headerBg: {
      light: "#FFF",
      dark: "#191A19",
    },
    sidebarPrimaryBg: {
      light: "#FFF",
      dark: "#1e1e1e",
    },
    sidebarSecondaryBg: {
      light: "#FFF",
      dark: "#212121",
    },
    cardBg: {
      light: "#FFF",
      dark: "#232934",
    },
    cardContentBg : {
      light: "#edf2f7",
      dark: "#1d1d1d",
    },
  },
});

export default Theme;