import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/tailwind.css";
import App from "./App";
// import './index.css'; // 기본 스타일링을 위한 CSS 파일 (선택 사항)

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
