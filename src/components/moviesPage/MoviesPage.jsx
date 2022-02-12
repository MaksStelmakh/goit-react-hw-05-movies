import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getFilmsForSearch } from "../../services/services-api";
import Loader from "../loader/Loader";
import SearchForm from "../searchForm/SearchForm";
import defaultPhoto from "../../images/no-img.jpeg";
import toast from "react-hot-toast";
import styled from "./MoviesPage.module.css";

export default function MoviesPage() {
  const location = useLocation();
  const [findedFilms, setFindedFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const value = location.search.slice(1);
  useEffect(() => {
    if (value) {
      setLoading(true);
      getFilmsForSearch(value, page)
        .then(pictureMethod)
        .catch((error) => {
          console.log(error);
        })
        .finally(setLoading(false));
    }
  }, [value, page]);

  const pictureMethod = ({ results }) => {
    if (findedFilms.length === 0 && results.length === 0) {
      return toast.error("There is no result for your reqest!");
    } else if (results.length === 0) {
      return toast.error("Images are over!");
    }
    if (findedFilms === []) {
      return setFindedFilms(results);
    }
    setFindedFilms((prevState) => [...prevState, ...results]);
  };
  return (
    <div>
      {loading && <Loader />}
      <SearchForm newSearch={setFindedFilms} newPage={setPage} />
      <ul className={styled.list}>
        {findedFilms &&
          findedFilms.length !== 0 &&
          findedFilms.map(({ id, original_title, poster_path }) => {
            return (
              <li className={styled.filmItem} key={id}>
                <Link
                  to={`/movies/${id}`}
                  state={{ from: location }}
                  className={styled.itemsLink}
                >
                  <img
                    className={styled.filmImages}
                    src={
                      poster_path
                        ? `https://image.tmdb.org/t/p/w500${poster_path}`
                        : `${defaultPhoto}`
                    }
                    alt={original_title}
                  />
                  <h3 className={styled.titleFilm}>{original_title}</h3>;
                </Link>
              </li>
            );
          })}
      </ul>
      {findedFilms.length !== 0 && (
        <div className={styled.buttonDiv}>
          <button
            className={styled.loadMore}
            type="button"
            onClick={() => {
              setPage((prev) => prev + 1);
            }}
          >
            Next page
          </button>
        </div>
      )}
    </div>
  );
}
