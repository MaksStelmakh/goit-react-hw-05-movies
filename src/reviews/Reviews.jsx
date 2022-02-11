import { getFilmsReviwers } from "../services/services-api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Reviews() {
  const [review, setReview] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    getFilmsReviwers(movieId).then(setReview);
  }, [review]);
  return (
    <div>
      <ul>
        {review &&
          review.results.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <h2>{author}</h2>
                <p>{content}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
