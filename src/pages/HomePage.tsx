import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const goToFaceReading = () => {
    navigate("/face");
  };

  const goToHandReading = () => {
    navigate("/hand");
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>🔮 보인다 (Boinda) 🔮</h1>
      <p>
        당신의 얼굴과 손에 숨겨진 운명의 실마리를 찾아보세요.
        <br />
        동양 철학 기반의 깊이 있는 해석으로 당신의 가능성을 발견해 드립니다.
      </p>
      <div style={{ marginTop: "30px" }}>
        <button
          onClick={goToFaceReading}
          style={{
            marginRight: "20px",
            padding: "10px 20px",
            fontSize: "16px",
          }}
        >
          얼굴 관상 보기
        </button>
        <button
          onClick={goToHandReading}
          style={{ padding: "10px 20px", fontSize: "16px" }}
        >
          손금 보기
        </button>
      </div>
    </div>
  );
};

export default HomePage;
