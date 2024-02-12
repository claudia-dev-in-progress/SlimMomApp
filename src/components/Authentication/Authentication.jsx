import { NavLink } from "react-router-dom";
import css from "./Authentication.module.css";

export const AuthNav = () => {
  return (
    <div className={css.navcontainer}>
      <NavLink className={css.navlink} to="/login">
        LOG IN
      </NavLink>
      <NavLink className={css.navlink} to="/register">
        REGISTRATION
      </NavLink>
    </div>
  );
};
