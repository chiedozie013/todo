import React, { useState, useEffect, useRef } from "react";
import { links } from "./data";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const { user, logout } = useAuthContext();
  const [openNavbar, setOpenNavbar] = useState(false);

  const navigate = useNavigate();

  const ref = useRef();
  useEffect(() => {
    const handler = (e) => {
      if (openNavbar && ref.current && !ref.current.contains(e.target)) {
        setOpenNavbar(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
    };
  }, [openNavbar]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <>
      <nav ref={ref} className="navbar">
        <button
          className="toggle"
          onClick={() => setOpenNavbar(() => !openNavbar)}
        >
          {openNavbar ? <MdClose /> : <FiMenu />}
        </button>
        <ul className={`menu-nav${openNavbar ? " show-menu" : ""}`}>
          {links.map((link) => {
            return (
              <React.Fragment key={link.text}>
                {link.path === "login" ? (
                  !user && (
                    <li>
                      <NavLink to={link.path}>{link.text}</NavLink>
                    </li>
                  )
                ) : link.path === "profile" ? (
                  user && (
                    <li>
                      <NavLink to={link.path}>{link.text}</NavLink>
                    </li>
                  )
                ) : (
                  <li>
                    <NavLink
                      to={link.path}
                      onClick={() => setOpenNavbar(false)}
                    >
                      {link.text}
                    </NavLink>
                  </li>
                )}
              </React.Fragment>
            );
          })}
          {!user && (
            <li className="log-in">
              <span>Log in to edit to-dos</span>
            </li>
          )}
        </ul>
      </nav>

      {user && (
        <div className="logout">
          <p>{user}</p>
          {<button onClick={handleLogout}>Logout</button>}
        </div>
      )}
    </>
  );
};

export default Navbar;
