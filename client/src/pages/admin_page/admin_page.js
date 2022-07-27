import { useState } from "react";
import Main from "../../components/admin_main/Main";
import AdminNavbar from "../../components/admin_navbar/AdminNavbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./admin_page.scss";

const AdminPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="container">
      <AdminNavbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Main />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
};

export default AdminPage;
