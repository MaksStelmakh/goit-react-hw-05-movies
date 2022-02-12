import { useState, useEffect } from "react";
import {
  useParams,
  useLocation,
  Link,
  NavLink,
  Outlet,
} from "react-router-dom";
import { getFilmsById } from "../../services/services-api";
import toast from "react-hot-toast";
import Publication from "../publication/Publication";
import styled from "./SingleCard.module.css";

export default function Singlecard() {
  const { movieId } = useParams();
  const [item, setItem] = useState(null);
  const location = useLocation();
  useEffect(() => {
    getFilmsById(movieId)
      .then(setItem)
      .catch(() => toast.error("This page does not exist"));
  }, [movieId]);

  return (
    <div className={styled.backgroundCard}>
      <Link className={styled.fallback} to={location?.state?.from ?? "/"}>
        Go back
      </Link>
      {item && <Publication item={item} />}
      <div>
        <h2 className={styled.title}>Aditional information</h2>
        <NavLink className={styled.fallback} to="cast">
          Cast
        </NavLink>
        <NavLink className={styled.fallback} to="reviews">
          Reviews
        </NavLink>
        <Outlet />
      </div>
    </div>
  );
}
