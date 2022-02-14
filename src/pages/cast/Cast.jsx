import { getFilmsCredits } from "../../services/services-api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import defaultPhoto from "../../images/no-img.jpeg";
import Loader from "../../components/loader/Loader";
import styled from "./Cast.module.css";

export default function Cast() {
  const [cast, setCast] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  useEffect(() => {
    setLoading(true);
    getFilmsCredits(movieId)
      .then(setCast)
      .catch((error) => console.log(error))
      .finally(setLoading(false));
  }, []);
  return (
    <div>
      <ul className={styled.list}>
        {loading && <Loader />}
        {cast &&
          cast.cast.map(({ id, name, profile_path, character }) => {
            return (
              <li className={styled.cast_item} key={id}>
                {
                  <img
                    className={styled.cast_photo}
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/w500${profile_path}`
                        : `${defaultPhoto}`
                    }
                    alt={name}
                  />
                }
                <p className={styled.text}>{character}</p>
                <h2 className={styled.text}>{name}</h2>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
