import "./AdminNavbar.scss";
import {
  faBars,
  faSearch,
  faUser,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const AdminNavbar = ({ sidebarOpen, openSidebar }) => {
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
        <NavLink to="#" className="anchor">
          <i>
            <FontAwesomeIcon icon={faSignOut} />
          </i>
        </NavLink>
      </div>
    </nav>
  );
};

export default AdminNavbar;
