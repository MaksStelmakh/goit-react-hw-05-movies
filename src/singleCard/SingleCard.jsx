import { useState, useEffect } from "react";
import { useParams, Link, NavLink, Outlet } from "react-router-dom";
import { getFilmsById } from "../services/services-api";
import toast from "react-hot-toast";
import Publication from "../publication/Publication";

export default function Singlecard() {
  const { movieId } = useParams();
  const [item, setItem] = useState(null);
  useEffect(() => {
    getFilmsById(movieId)
      .then(setItem)
      .catch(() => toast.error("This page does not exist"));
  }, [movieId]);

  return (
    <main>
      <Link to="/">К рекомендациям</Link>
      {item && <Publication item={item} />}
      <div>
        <h2>Aditional information</h2>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
        <Outlet />
      </div>
    </main>
  );
}
