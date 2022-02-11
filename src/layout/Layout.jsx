import { Outlet, NavLink } from "react-router-dom";
import { Toaster } from "react-hot-toast";

export default function Layout() {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Outlet />
      <Toaster />
    </div>
  );
}
