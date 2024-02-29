'use client'
import { ThemeProvider } from "@mui/material";
import { materialThemeConfig } from "./materialThemeConfig";

type Props = React.PropsWithChildren

const MaterialThemeProvider = (props:Props) => {
    const {children} = props
  return (
    <ThemeProvider theme={materialThemeConfig}>
      {children}
    </ThemeProvider>
  );
};

export default MaterialThemeProvider;
// 'use client'
// import React, { useEffect, useState } from 'react';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import { Theme } from '@mui/material/styles/createTheme';

// type Props = React.PropsWithChildren<{}>;


// const MaterialThemeProvider = (props: Props) => {
//   const { children } = props;
//   const [theme, setTheme] = useState<Theme | null>(null);

//   useEffect(() => {
//     // Dynamically import the theme configuration here
//     import('./materialThemeConfig').then((themeConfig) => {
//       // Create the theme from the config only on the client-side
//       const clientSideTheme = createTheme(themeConfig.materialThemeConfig);
//       setTheme(clientSideTheme);
//     });
//   }, []);

//   // Render the children only when the theme is available
//   return (
//     <React.Fragment>
//       {theme ? (
//         <ThemeProvider theme={theme}>
//           {children}
//         </ThemeProvider>
//       ) : (
//         // Optionally, provide a fallback or a loading state here
//         <div>Loading theme...</div>
//       )}
//     </React.Fragment>
//   );
// };

// export default MaterialThemeProvider;
