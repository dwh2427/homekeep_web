import { createTheme } from "@mui/material";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    dashed: true;
    contained_light: true;
  }
}

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      dark: "#004318",
      main: "#038732",
      light: "#BEF542",
      contrastText: "#fff",
    },
    secondary: {
      main: "#F2F8E2",
    },
  },
});

export const materialThemeConfig = createTheme(theme, {
  typography: {
    fontFamily: "Lato iowan_old",
    fontSize: 18,
    button: {
      [theme.breakpoints.down("lg")]: {
        fontSize: 16,
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: 18,
      },
    },
  },
  // spacing:8,
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "text" },
          style: { textTransform: "capitalize", fontWeight: "900",'&:hover': {
            backgroundColor: '#F2F8E2', // Custom hover color
            // For changing text color on hover, use color property here
          }, },
        },
        {
          props: { variant: "contained" },
          style: {
            color: "primary",
            textTransform: "capitalize",
            padding: "12px 24px",
            [theme.breakpoints.down("lg")]: {
              padding: "8px 16px",
            },
          },
        },
        {
          props: { variant: "contained_light" },
          style: {
            backgroundColor: theme.palette.primary.light,
            textTransform: "capitalize",
            padding: "12px 24px",
            [theme.breakpoints.down("lg")]: {
              padding: "8px 16px",
            },
          },
        },
        {
          props: { variant: "dashed" },
          style: {
            borderBottomWidth: 2,
            borderBottomColor: theme.palette.primary.light,
            borderBottomStyle: "solid",
            borderRadius: 0,
            padding: 0,
          },
        },
      ],

      styleOverrides: {
        colorInherit: "none",
        root: {
          fontFamily: "Lato",
          textTransform: "capitalize",
          padding: "12px 14px"
          // Increase padding for all buttons
          // Adjust as needed
          
        },
      },
    },
  },
  shape: {
    borderRadius: 40
  },
});

// materialThemeConfig.typography.button = {
//   ...materialThemeConfig.typography.button,
//   fontSize: 18,
//   [materialThemeConfig.breakpoints.down("lg")]: {
//     fontSize: 16,
//   },
// };
