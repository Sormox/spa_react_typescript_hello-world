import React from "react";
import { NavLink } from "react-router-dom";

export const NavBarBrand: React.FC = () => {
  return (
    <div className="nav-bar__brand">
      <NavLink to="/">
        <img
          className="nav-bar__logo"
          src="https://cdn.auth0.com/blog/developer-hub/react-logo.svg"
          alt="react logo"
          width="122"
          height="36"
        />
      </NavLink>
    </div>
  );
};
