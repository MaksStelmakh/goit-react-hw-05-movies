import { Link } from "react-router-dom";

export default function ({ cards }) {
  return (
    <>
      {cards.map(({ id, original_title, poster_path }) => {
        return (
          <li key={id}>
            <Link to={`/movies/${id}`}>
              <h3>{original_title}</h3>;
              <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt=""
              />
            </Link>
          </li>
        );
      })}
    </>
  );
}
