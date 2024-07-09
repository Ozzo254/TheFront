// import React from "react";
import { useCallback, useContext, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { CursorContext } from "../utils/context/CursorContextProvider";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  const [, setCursor] = useContext(CursorContext)
  const toggleCursor = useCallback(() =>{
    setCursor(({ active }) => ({ active: !active}));
  });
  return (
    <>
      <div className="nav">
        <Link to="/">
          <div className="logo"
          >The Fr0nt</div>
        </Link>

        <ul className="nav-menu">
          <Link
            to="/"
            onClick={() => setMenu("home")}
            className={menu === "home" ? "active" : ""}
          >
            Home
          </Link>
          <a
            href="#"
            onClick={() => setMenu("explore")}
            className={menu === "explore" ? "active" : ""}
          >
            Explore
          </a>
          <a
            href="#"
            onClick={() => setMenu("services")}
            className={menu === "services" ? "active" : ""}
          >
            Services
          </a>
          <a
            href="#"
            onClick={() => setMenu("about")}
            className={menu === "about" ? "active" : ""}
          >
            About
          </a>

          <a
            href="#"
            onClick={() => setMenu("nav-contact")}
            onMouseEnter={toggleCursor}
            onMouseLeave={toggleCursor}
            className={
              menu === "nav-contact"
                ? "nav-contact" + " active"
                : "nav-contact" + ""
            }
          >
            Contact
          </a>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
