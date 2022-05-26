import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import { faHome, faList } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  //useState()
  const [showSidebar, setShowSidebar] = useState(false);

  //useLocation()
  const location = useLocation();

  //Arrary of Object (Nav)
  const links = [
    {
      name: "Home",
      path: "/",
      icon: faHome,
    },
    {
      name: "Recipes",
      path: "/recipes",
      icon: faList,
    },
  ];

  //FUNC to close sidebar
  function closeSidebar() {
    setShowSidebar(false);
  }
  return (
    <>
      <div className="navbar container">
        <Link to="/" className="logo">
          F<span>oo</span>diesHub
        </Link>
        <div className="nav-links">
          {links.map((link) => (
            <Link
              to={link.path}
              className={
                location.pathname === link.path
                  ? "nav-links active"
                  : "nav-links"
              }
              key={link.name}
            >
              {link.name}
            </Link>
          ))}
          {/* <a href="#!">Home</a>
          <a href="#!">Recipes</a>
          <a href="#!">Settings</a> */}
        </div>
        <div
          onClick={() => setShowSidebar(true)}
          className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      {showSidebar && <Sidebar close={closeSidebar} links={links} />}
    </>
  );
};

export default NavBar;
