import { colors, createTheme } from "@mui/material";

const theme = createTheme({
    direction: "rtl",
    typography: {
      fontFamily: "vazirmatn"
    },
    palette: {
      background: {
        default: '#F7FBFC'
      },
      primary: {
        main: '#769FCD'
      },
      secondary: {
        main: '#B9D7EA',
        light: '#F7FBFC',
        dark: '#D6E6F2',
        contrastText: '#47008F',
      },
    }
  });

  export default theme;
