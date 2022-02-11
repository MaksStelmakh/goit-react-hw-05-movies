import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../layout/Layout";
import MoviesPage from "../moviesPage/MoviesPage";
import HomePage from "../homePage/HomePage";
import Singlecard from "../singleCard/SingleCard";
import Reviews from "../reviews/Reviews";
import Cast from "../cast/Cast";

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
