import { createTheme } from "@mui/material";

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
        main: '#00ADB5',
        light: 'white',
        dark: 'black',
        contrastText: 'white'
      },

    }
  });

  export default theme;
