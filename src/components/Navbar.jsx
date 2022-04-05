import React, { useEffect, useState } from "react";
import styles from "../styles/Navbar.module.scss";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import LogOutModal from "./LogOutModal";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const role = localStorage.getItem("role");
  const [showItems, setShowItems] = useState(true);
  // console.log(role);
  const mql = window.matchMedia("(max-width: 600px)");
  useEffect(() => {
    if (mql.matches) {
      setShowItems(false);
    }
  }, [mql.matches]);
  const toggleItemsHandler = () => {
    if (mql.matches) {
      setShowItems((prev) => !prev);
    }
  };
  return (
    <div className={styles.navbar}>
      <div className={styles.logoBox}>
        <img src={logo} alt="" className={styles.logo} />
        <span>
          {showItems === false ? (
            <GiHamburgerMenu
              className={styles.hamIcon}
              onClick={toggleItemsHandler}
            />
          ) : (
            <ImCross
              className={styles.crossIcon}
              onClick={toggleItemsHandler}
            />
          )}
        </span>
      </div>
      {showItems && (
        <div className={styles.menuItems}>
          {role === "interviewer" ? (
            <Link to="/home" onClick={toggleItemsHandler}>
              Home
            </Link>
          ) : (
            ""
          )}
          {role === "hr" ? (
            <Link to="/reviews" onClick={toggleItemsHandler}>
              Reviews
            </Link>
          ) : (
            ""
          )}
          <Link to="/about" onClick={toggleItemsHandler}>
            About
          </Link>
          <Link to="/privacy" onClick={toggleItemsHandler}>
            Privacy Policy
          </Link>
          <LogOutModal />
        </div>
      )}
    </div>
  );
};

export default Navbar;
