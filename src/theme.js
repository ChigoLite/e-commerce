import { createTheme } from "@mui/material";
import { green, blue, orange } from "@mui/material/colors";

const secondary = "#c300ff";
const primary = "#b6683bdc";
const tertiary = blue[900];

const Theme = createTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
    tertiary: {
      main: tertiary,
    },
  },
});

export default Theme;
