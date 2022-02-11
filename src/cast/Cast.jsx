import { getFilmsCredits } from "../services/services-api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Reviews() {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    getFilmsCredits(movieId).then(setCast);
  }, [cast]);
  return (
    <div>
      <ul>
        {cast &&
          cast.cast.map((item) => {
            console.log(item);
            return (
              <li key={item.id}>
                <h2>{item.name}</h2>
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                  alt={item.name}
                />
                <p>{item.character}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
