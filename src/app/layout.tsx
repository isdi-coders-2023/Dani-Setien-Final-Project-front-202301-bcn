"use client";

import StyledComponentsRegistry from "../styles/styled-components/registry";
import { ThemeProvider } from "styled-components";
import "@fontsource/quattrocento-sans";
import theme from "@/styles/theme";
import GlobalStyles from "@/styles/globalStyles";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>

      <StyledComponentsRegistry>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <body>{children}</body>
        </ThemeProvider>
      </StyledComponentsRegistry>
    </html>
  );
}
