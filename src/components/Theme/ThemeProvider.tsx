"use client";

import React, { PropsWithChildren } from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import theme from "./themeBuild";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function ThemeProvider({ children }: PropsWithChildren) {
  return (
    <CacheProvider value={cacheRtl}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </CacheProvider>
  );
}

export default ThemeProvider;
