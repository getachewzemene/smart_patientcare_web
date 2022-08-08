import { useState } from "react";
import Main from "../../components/admin_main/Main";
import AdminNavbar from "../../components/admin_navbar/AdminNavbar";
import AddDiseaseModal from "../../components/modals/AddDiseaseModal";
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
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleShowModal = () => {
    setSidebarOpen(false);
    setShowModal(true);
  };
  return (
    <div className="admin-container">
      <AdminNavbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Main />
      <Sidebar
        sidebarOpen={sidebarOpen}
        closeSidebar={closeSidebar}
        handleShowModal={handleShowModal}
      />
      <AddDiseaseModal show={showModal} handleClose={handleCloseModal} />
    </div>
  );
};

export default AdminPage;
