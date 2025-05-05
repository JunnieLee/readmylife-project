import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FaceReadPage from "./pages/FaceReadPage";
import HandReadPage from "./pages/HandReadPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/face" element={<FaceReadPage />} />
        <Route path="/hand" element={<HandReadPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
