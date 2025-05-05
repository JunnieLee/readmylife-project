import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FaceReadPage from "./pages/FaceReadPage";
import HandReadPage from "./pages/HandReadPage";

const App: React.FC = () => {
  useEffect(() => {
    // 모바일 최적화를 위한 viewport 설정
    const meta = document.createElement("meta");
    meta.name = "viewport";
    meta.content =
      "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no";
    document.getElementsByTagName("head")[0].appendChild(meta);

    // 스타일 설정
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.overflowX = "hidden";
    document.documentElement.style.height = "100%";
    document.body.style.height = "100%";
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/face" element={<FaceReadPage />} />
        <Route path="/hand" element={<HandReadPage />} />
      </Routes>
    </Router>
  );
};

export default App;
