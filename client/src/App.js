import { React, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import NoMatch from "./pages/no-match/no-match";
import AdminPage from "./pages/admin_page/admin_page";
import MeetingPage from "./components/video-meeting/meeting-page/meeting-page";
import * as process from "process";
import Home from "./pages/home";
import Layout from "./components/layout/layout";
import "./App.scss";
import AddDoctorForm from "./pages/add_doctor/AddDoctor";
import DoctorPage from "./pages/doctor_page/DoctorPage";
import { AdminPrivateRoutes, DoctorPrivateRoutes } from "./utils/PrivateRoutes";

const App = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const userInfo = {
    isLoggedIn: isLoggedIn,
  };
  useEffect(() => {
    window.process = {
      ...process,
    };
  }, []);
  return (
    <>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route element={<AdminPrivateRoutes userInfo={userInfo} />}>
            <Route path="/admin/dashboard" element={<AdminPage />} />
            <Route path="/admin/doctor" element={<AddDoctorForm />} />
          </Route>
          <Route element={<DoctorPrivateRoutes userInfo={userInfo} />}>
            <Route path="/doctor" element={<DoctorPage />} />
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/meeting" element={<MeetingPage />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
