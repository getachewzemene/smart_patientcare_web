import { React, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import NoMatch from "./pages/no-match/no-match";
import AdminPage from "./pages/admin_page/admin_page";
import MeetingPage from "./components/video-meeting/meeting-page/meeting-page";
import VideoCall from "./components/video-meeting/video-call/video-call";
import * as process from "process";
import Home from "./pages/home";
import Layout from "./components/layout/layout";
import "./App.scss";
import AddDoctorForm from "./pages/add_doctor/AddDoctor";
import DoctorPage from "./pages/doctor_page/DoctorPage";

const App = () => {
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
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/doctor" element={<AddDoctorForm />} />
          <Route path="/doctor" element={<DoctorPage />} />
          <Route path="/meeting" element={<MeetingPage />} />
          <Route path="/meeting/:id" element={<VideoCall />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
