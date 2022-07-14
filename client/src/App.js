import { React, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/pages/login/login";
import Signup from "./components/pages/signup/signup";
import NoMatch from "./components/no-match/no-match";
import MeetingPage from "./components/video-meeting/meeting-page/meeting-page";
import VideoCall from "./components/video-meeting/video-call/video-call";
import * as process from "process";
import Home from "./components/pages/home";
import Layout from "./components/layout/layout";
import "./App.scss";

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
          <Route path="/meeting" element={<MeetingPage />} />
          <Route path="/meeting/:id" element={<VideoCall />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
