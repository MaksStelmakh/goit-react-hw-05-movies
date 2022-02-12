import { Link } from "react-router-dom";
import defaultPhoto from "../../images/no-img.jpeg";
import styled from "./RecomendedFilms.module.css";
import PropTypes from "prop-types";

export default function RecomendedFilms({ cards }) {
  return (
    <>
      {cards.map(({ id, original_title, poster_path }) => {
        return (
          <li className={styled.filmItem} key={id}>
            <Link to={`/movies/${id}`} className={styled.itemsLink}>
              <img
                className={styled.filmImages}
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500${poster_path}`
                    : `${defaultPhoto}`
                }
                alt={original_title}
              />
              <h3 className={styled.titleFilm}>{original_title}</h3>
            </Link>
          </li>
        );
      })}
    </>
  );
}

RecomendedFilms.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
    })
  ),
};
