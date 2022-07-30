import React, { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import "./AdminNavbar.scss";
import {
  faBars,
  faSearch,
  faUser,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import EventBus from "../../common/event_bus";
import { logout } from "../../slices/auth_slice";

const AdminNavbar = ({ sidebarOpen, openSidebar }) => {
  const dispatch = useDispatch();
  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    EventBus.on("logout", () => {
      logOut();
    });
    return () => {
      EventBus.remove("logout");
    };
  });
  return (
    <nav className="admin-navbar">
      <div className="nav-icon" onClick={() => openSidebar()}>
        <i>
          <FontAwesomeIcon icon={faBars} />
        </i>
      </div>
      <div className="navbar-left">
        <NavLink to="/" className="anchor">
          Home
        </NavLink>
        <NavLink to="#" className="anchor">
          Users
        </NavLink>
        <NavLink to="#" className="anchor">
          Appointment
        </NavLink>
        <NavLink to="#" className="active-link">
          Admin
        </NavLink>
      </div>
      <div className="navbar-right">
        <NavLink to="#" className="anchor">
          <i>
            <FontAwesomeIcon icon={faSearch} />
          </i>
        </NavLink>
        <NavLink to="#" className="anchor">
          <i>
            <FontAwesomeIcon icon={faUser} />
          </i>
        </NavLink>
        <NavLink className="anchor" to="/" onClick={logOut}>
          <OverlayTrigger
            delay={{ hide: 100, show: 0 }}
            overlay={(props) => <Tooltip {...props}>Logout</Tooltip>}
            placement="bottom"
          >
            <i>
              <FontAwesomeIcon icon={faSignOut} />
            </i>
          </OverlayTrigger>
        </NavLink>
      </div>
    </nav>
  );
};

export default AdminNavbar;
