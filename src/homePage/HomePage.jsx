import { useState, useEffect } from "react";
import RecomendedFilms from "../recomendedFilms/RecomendedFilms";
import Loader from "../loader/Loader";
import { getRecomendation } from "../services/services-api";

export default function HomePage() {
  const [films, setFilms] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getRecomendation(page)
      .then(setFilms)
      .catch((error) => console.log(error))
      .finally(setLoading(false));
  }, []);

  return (
    <main>
      <h1>Recommended Films</h1>
      {loading && <Loader />}
      <ul>{films && <RecomendedFilms cards={films.results} />}</ul>
    </main>
  );
}
