import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = ({user, onLogout }) => {
    const name = user;
    const navigate = useNavigate();

    const homePage = ()=>{
        navigate("/");
    }
    
  return (
    <nav className={styles.navbar}>

      <div className={styles.logo} onClick={homePage}>
        
        StoreRating
      </div>

      <div className={styles.links}>

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles.active : styles.link
          }
        >
          Home
        </NavLink>

        {name && (
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
          >
            Dashboard
          </NavLink>
        )}

        <NavLink
          to="/shops"
          className={({ isActive }) =>
            isActive ? styles.active : styles.link
          }
        >
          Shops
        </NavLink>

        {!name && (
          <>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? styles.active : styles.link
              }
            >
              Login
            </NavLink>

            <NavLink
              to="/register"
              className={styles.primaryBtn}
            >
              Register
            </NavLink>
          </>
        )}

        {name && (
           <>{name}
          <button
            onClick={onLogout}
            className={styles.logoutBtn}
          >
            Logout
          </button>
          </> 
        )}

      </div>

    </nav>
  );
};

export default Navbar;