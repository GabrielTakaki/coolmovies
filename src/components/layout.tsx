import React from "react";
import Header from "./general/Header";
import Box from "./layout/Box";
import useMediaQuery from "../hooks/useMediaQuery";

export default function Layout({ children }: { children: React.ReactNode }) {
  const isDesktop = useMediaQuery("md");
  return (
    <>
      <Header />
      <Box component="main" margin={isDesktop ? "20px 160px" : "20px 40px"}>
        {children}
      </Box>
    </>
  );
}
