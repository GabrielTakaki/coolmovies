import React, { useEffect } from "react";
import Header from "./general/Header";
import Box from "./layout/Box";
import useMediaQuery from "@hooks/useMediaQuery";
import { useAppDispatch } from "@redux/store";
import { movieActions } from "@redux/slices/moviesSlice";
import { reviewsActions } from "@redux/slices/reviewsSlice";
import { userActions } from "@redux/slices/userSlice";

export default function Layout({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const isDesktop = useMediaQuery("md");

  useEffect(() => {
    dispatch(movieActions.fetchMovies());
    dispatch(reviewsActions.fetchReviews());
    dispatch(userActions.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Box component="main" margin={isDesktop ? "20px 160px" : "20px"}>
        {children}
      </Box>
    </>
  );
}
