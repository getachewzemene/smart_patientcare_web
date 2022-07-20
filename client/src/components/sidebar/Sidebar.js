import "./Sidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
      <div className="sidebar-title">
        <div className="sidebar-logo">
          <img src="./logo512.png" alt="logo" height="100px" />
          <h1>Smart PatientCare</h1>
        </div>
        <i id="sidebarIcon">
          <FontAwesomeIcon icon={faBars} onClick={() => closeSidebar()} />
        </i>
      </div>
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
          <i>
            <FontAwesomeIcon icon={faDisease} />
          </i>
          <NavLink className="anchor" to="#">
            Disease Management
          </NavLink>
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
          <NavLink className="anchor" to="#">
            Logout
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
