import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "../layout/Layout";
import Reviews from "../reviews/Reviews";
import Cast from "../cast/Cast";
import styled from "./App.module.css";

const HomePage = lazy(() => import("../homePage/HomePage"));
const MoviesPage = lazy(() => import("../moviesPage/MoviesPage"));
const Singlecard = lazy(() => import("../singleCard/SingleCard"));

function App() {
  return (
    <div className={styled.container}>
      <Suspense fallback="">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="movies/:movieId" element={<Singlecard />}>
              <Route path="cast" element={<Cast />}></Route>
              <Route path="reviews" element={<Reviews />}></Route>
            </Route>
            <Route path="*" element={<Navigate to="/" />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
