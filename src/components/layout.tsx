import React, { useEffect } from "react";
import Header from "./general/Header";
import Box from "./layout/Box";
import useMediaQuery from "../hooks/useMediaQuery";
import { moviesActions, useAppDispatch } from "../redux/store";

export default function Layout({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const isDesktop = useMediaQuery("md");

  useEffect(() => {
    dispatch(moviesActions.fetch());
  }, [dispatch]);
  return (
    <>
      <Header />
      <Box component="main" margin={isDesktop ? "20px 160px" : "20px 40px"}>
        {children}
      </Box>
    </>
  );
}
