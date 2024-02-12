import { NavLink } from "react-router-dom";
import { useAuth } from "hooks";
import css from "./Navigation.module.css";
import { useMediaQuery } from "react-responsive";
import logo_mobile from "../../images/logo/logo_mobile.png";
import logo_mobileRetina from "../../images/logo/logo_mobile@2x.png";
import logo_tablet from "../../images/logo/logo_tablet.png";
import logo_tabletRetina from "../../images/logo/logo_tablet@2x.png";
import logo_desktop from "../../images/logo/logo_desktop.png";
import logo_desktopRetina from "../../images/logo/logo_desktop@2x.png";

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });
  const isMobile = useMediaQuery({ query: "(max-width: 426px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 426px) and (max-width: 1023px)",
  });
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const takeLogo = () => {
    if (isMobile) {
      return logo_mobile;
    } else if (isTablet) {
      return logo_tablet;
    } else if (isDesktop) {
      return logo_desktop;
    } else if (isMobile && isRetina) {
      return logo_mobileRetina;
    } else if (isTablet && isRetina) {
      return logo_tabletRetina;
    } else if (isDesktop && isRetina) {
      return logo_desktopRetina;
    }
  };

  return (
    <nav className={css.nav}>
      <NavLink className={css.link} to="/">
        <img className={css.logo} alt={""} src={takeLogo()}></img>
      </NavLink>
      {isLoggedIn && (
        <div className={css.linkcontainer}>
          <NavLink className={css.diary} to="/diary">
            Diary
          </NavLink>
          <NavLink className={css.calculator} to="/calculator">
            Calculator
          </NavLink>
        </div>
      )}
    </nav>
  );
};
