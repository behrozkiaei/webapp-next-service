// import { ThemeProvider, createTheme } from "@mui/material";
"use client"; // this is a client component 👈🏽

import FetchMe from "@/components/fetch-me";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { StrictMode } from "react";


const theme = createTheme({
  palette: {
    primary: {
      main: "#00bc3b",
    },
    secondary: {
      main: "#01286d",
    },
    error: {
      main: "#ff5252",
    },
  },
  direction: "rtl",
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          right: 18,
          left: "auto",
        },
        shrink: {
          // transform: 'translate(0, -10px) scale(0.75)',
        },
      },
    },
  },
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="rtl">
      <StrictMode>
      <ThemeProvider theme={theme}>
        <body>
          <>
            {children}
            <FetchMe />
          </>
        </body>
        
      </ThemeProvider>
        </StrictMode>
    </html>
  );
}
