import { Box } from "@mui/material";
import React from "react";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Box sx={{
    display: "flex",
    height: "100svh",
    alignItems: "center",
    justifyContent: "center"
  }}>{children}</Box>;
}

export default Layout;
