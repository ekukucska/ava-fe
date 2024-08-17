import { createTheme } from "@mui/material/styles";
import colors from "./colors";
import typography from "./typography";

const theme = createTheme({
  palette: colors, // Use the imported colors
  typography: typography, // Use the imported typography
  // You can add other theme customizations here, like spacing, components, etc.
  // For ex. you can customize components globally by using the components property in the theme / including it form another file.
  // components: {
  //   MuiButton: {
  //     styleOverrides: {
  //       root: {
  //         fontSize: "1rem",
  //       },
  //       containedPrimary: {
  //         backgroundColor: "#1976d2",
  //         "&:hover": {
  //           backgroundColor: "#115293",
  //         },
  //       },
  //     },
  //   },
  // },
});

export default theme;
