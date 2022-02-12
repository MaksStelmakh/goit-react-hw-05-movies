import { useState, useEffect } from "react";
import RecomendedFilms from "../recomendedFilms/RecomendedFilms";
import Loader from "../loader/Loader";
import toast from "react-hot-toast";
import { getRecomendation } from "../../services/services-api";
import styles from "./HomePage.module.css";

export default function HomePage() {
  const [films, setFilms] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getRecomendation(page)
      .then(pictureMethod)
      .catch((error) => console.log(error))
      .finally(setLoading(false));
  }, [page]);

  const pictureMethod = ({ results }) => {
    if (results.length === 0) {
      return toast.error("Images are over!");
    }
    if (films.length === 0) {
      return setFilms(results);
    }
    setFilms((prevState) => [...prevState, ...results]);
  };
  return (
    <main>
      <h1 className={styles.pageTitle}>Popular of this week</h1>
      {loading && <Loader />}
      <ul className={styles.listFilms}>
        {films.length !== 0 && <RecomendedFilms cards={films} />}
      </ul>
      {films.length !== 0 && (
        <div className={styles.buttonDiv}>
          <button
            className={styles.loadMore}
            type="button"
            onClick={() => {
              setPage((prev) => prev + 1);
            }}
          >
            Next page
          </button>
        </div>
      )}
    </main>
  );
}
