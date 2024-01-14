import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#1e1e1e",
      paper: "#2c3e50",
    },
    primary: {
      main: "#56c288",
    },
    cta: {
      main: "#56c288",
      hover: "#57d299",
    },
    text: {
      primary: "#ffffff",
      secondary: "#a1a1a1",
    },
  },
  typography: {
    fontFamily: "Ubuntu, Roboto, sans-serif",
    h1: {
      fontFamily: "Stalinist One, Roboto, sans-serif",
      fontWeight: 700,
      fontSize: "3rem",
      lineHeight: 1.2,
      "@media (max-width: 768px)": {
        fontSize: "2rem",
      },
    },
    h2: {
      fontFamily: "Stalinist One, sans-serif",
      fontWeight: 600,
      fontSize: "2.5rem",
      lineHeight: 1.3,
      "@media (max-width: 768px)": {
        fontSize: "1.7rem",
      },
    },
    h3: {
      fontFamily: "Stalinist One, sans-serif",
      fontSize: "2rem",
      fontWeight: 500,
      lineHeight: 1.35,
    },
    h4: {
      fontFamily: "Stalinist One, sans-serif",
      fontSize: "1.5rem",
      fontWeight: 500,
    },
    h5: {
      fontFamily: "Stalinist One, sans-serif",
      fontSize: "1.25rem",
      fontWeight: 400,
    },
    h6: {
      fontFamily: "Stalinist One, sans-serif",
      fontSize: "1.1rem",
      fontWeight: 400,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
    },
    body2: {
      fontFamily: "Silkscreen, Roboto, sans-serif",
      fontSize: "0.9rem",
      lineHeight: 1.4,
    },
    subtitle1: {
      fontSize: "1.2rem",
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    button: {
      fontWeight: 500,
    },
    caption: {
      fontSize: "0.75rem",
    },
    overline: {
      fontSize: "0.75rem",
      fontWeight: 400,
      letterSpacing: 1.5,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(144, 238, 144, 0.3)",
          boxShadow: "none",
          transition: "all 0.5s ease",
          borderRadius: "0",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },
  },
});

const fontList = ["Roboto:300,400,500,700", "Stalinist One", "Silkscreen"];

export default theme;

export { fontList };
