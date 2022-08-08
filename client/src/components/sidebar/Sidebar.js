import React from "react";
import "./Sidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  faBars,
  faHome,
  faUserDoctor,
  faUser,
  faDatabase,
  faSignOut,
  faMessage,
  faDisease,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import EventBus from "../../common/event_bus";
import { logout } from "../../slices/auth_slice";

const Sidebar = ({ sidebarOpen, closeSidebar, handleShowModal }) => {
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
    <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
      <div className="sidebar-title">
        <div className="sidebar-logo">
          <span className="h4 text-green">
            Smart<span className="h4 text-yellow">Patient</span>
            <span className="h4 text-red">Care</span>
          </span>
        </div>

        <i id="sidebarIcon">
          <FontAwesomeIcon icon={faBars} onClick={() => closeSidebar()} />
        </i>
      </div>
      <h6 className="mb-2">Amazing technology. Graceful care</h6>
      <div className="sidebar-menu">
        <div className="sidebar-link active-menu-link">
          <i>
            <FontAwesomeIcon icon={faHome} />
          </i>
          <NavLink to="#">Dashboard</NavLink>
        </div>
        <h2>Contents</h2>
        <div className="sidebar-link">
          <i>
            <FontAwesomeIcon icon={faUserDoctor} />
          </i>
          <NavLink className="anchor" to="/admin/doctor">
            Doctor Management
          </NavLink>
        </div>
        <div className="sidebar-link">
          <Nav.Link className="anchor m-0 p-0" onClick={handleShowModal}>
            <i className="fa-1x">
              <FontAwesomeIcon icon={faDisease} />
            </i>
            Add Disease
          </Nav.Link>
        </div>
        <div className="sidebar-link">
          <i>
            <FontAwesomeIcon icon={faUserDoctor} />
          </i>
          <NavLink className="anchor" to="#">
            Doctors
          </NavLink>
        </div>
        <div className="sidebar-link">
          <i>
            <FontAwesomeIcon icon={faUser} />
          </i>
          <NavLink className="anchor" to="#">
            Patients
          </NavLink>
        </div>
        <div className="sidebar-link">
          <i>
            <FontAwesomeIcon icon={faDatabase} />
          </i>
          <NavLink className="anchor" to="#">
            Appointments
          </NavLink>
        </div>
        <div className="sidebar-link">
          <i>
            <FontAwesomeIcon icon={faMessage} />
          </i>
          <NavLink className="anchor" to="#">
            User FeedBack
          </NavLink>
        </div>
        <div className="sidebar-logout">
          <i>
            <FontAwesomeIcon icon={faSignOut} />
          </i>
          <NavLink className="anchor" to="/admin/login" onClick={logOut}>
            Logout
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
