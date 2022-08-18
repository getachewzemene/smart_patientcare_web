import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Main from "../../components/admin_main/Main";
import AdminNavbar from "../../components/admin_navbar/AdminNavbar";
import AddDiseaseModal from "../../components/modals/AddDiseaseModal";
import AddDoctorModal from "../../components/modals/AddDoctorModal";
// import AddScheduleModal from "../../components/modals/AddScheduleModal";
import Sidebar from "../../components/sidebar/Sidebar";
import { getAllDcotor } from "../../services/user_service";
import "./admin_page.scss";

const AdminPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [doctorData, setAllDoctorData] = useState([]);
  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    getAllDcotor().then((response) => {
      setAllDoctorData(response);
    });
  }, [dispatch]);
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  const [showDoctorModal, setShowDoctorModal] = useState(false);
  const [showDiseaseModal, setShowDiseaseModal] = useState(false);
  // const [showScheduleModal, setShowScheduleModal] = useState(false);

  const handleShowDoctorModal = () => {
    setSidebarOpen(false);
    setShowDoctorModal(true);
  };
  const handleCloseDoctorModal = () => {
    setShowDoctorModal(false);
  };

  const handleShowDiseaseModal = () => {
    setSidebarOpen(false);
    setShowDiseaseModal(true);
  };
  const handleCloseDiseaseModal = () => {
    setShowDiseaseModal(false);
  };
  // const handleShowScheduleModal = () => {
  //   setSidebarOpen(false);
  //   setShowScheduleModal(true);
  // };
  // const handleCloseScheduleModal = () => {
  //   setShowScheduleModal(false);
  // };
  return (
    <div className="admin-container">
      <AdminNavbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Main doctorData={doctorData} />

      <Sidebar
        sidebarOpen={sidebarOpen}
        closeSidebar={closeSidebar}
        handleShowDoctorModal={handleShowDoctorModal}
        handleShowDiseaseModal={handleShowDiseaseModal}
      />
      <AddDiseaseModal
        show={showDiseaseModal}
        handleClose={handleCloseDiseaseModal}
      />
      <AddDoctorModal
        show={showDoctorModal}
        handleClose={handleCloseDoctorModal}
      />
      {/* <AddScheduleModal
        show={showScheduleModal}
        handleClose={handleCloseScheduleModal}
      /> */}
    </div>
  );
};

export default AdminPage;
