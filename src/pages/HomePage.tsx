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
    <div className="min-h-screen bg-mystical-100 bg-opacity-90 bg-hangi-texture bg-cover bg-center">
      <div className="container-custom flex flex-col items-center justify-center min-h-screen">
        <div className="relative my-8">
          <div className="absolute -top-6 -left-6 w-4 h-4 bg-amber-300 rounded-full opacity-80 animate-candle-flicker"></div>
          <h1 className="text-4xl md:text-5xl font-semibold text-mystical-800 tracking-wide">
            🔮 보인다 (Boinda) 🔮
          </h1>
          <div className="absolute -bottom-6 -right-6 w-4 h-4 bg-amber-300 rounded-full opacity-80 animate-candle-flicker"></div>
        </div>

        <div className="w-48 h-48 md:w-56 md:h-56 mb-8 relative">
          <img
            src="/assets/welcome.png"
            alt="도사 캐릭터"
            className="w-full h-full object-contain"
          />
          <div className="absolute -bottom-2 right-0 w-3 h-3 bg-amber-300 rounded-full opacity-60 animate-candle-flicker"></div>
        </div>

        <p className="text-center text-mystical-700 mb-10 max-w-xs md:max-w-md leading-relaxed">
          당신의 얼굴과 손에 숨겨진 운명의 실마리를 찾아보세요.
          <br />
          동양 철학 기반의 깊이 있는 해석으로 당신의 가능성을 발견해 드립니다.
        </p>

        <div className="w-full max-w-xs">
          <div className="card mb-4 hover:shadow-lg transition-shadow duration-300">
            <button
              onClick={goToFaceReading}
              className="w-full py-6 flex flex-col items-center text-mystical-700 hover:text-mystical-800 transition-colors"
            >
              <span className="text-3xl mb-2">👤</span>
              <span className="text-lg font-medium">얼굴 관상 보기</span>
              <span className="text-sm text-mystical-600 mt-1">
                당신의 얼굴에 숨겨진 운명이 보이는구나...
              </span>
            </button>
          </div>

          <div className="card hover:shadow-lg transition-shadow duration-300">
            <button
              onClick={goToHandReading}
              className="w-full py-6 flex flex-col items-center text-mystical-700 hover:text-mystical-800 transition-colors"
            >
              <span className="text-3xl mb-2">👐</span>
              <span className="text-lg font-medium">손금 보기</span>
              <span className="text-sm text-mystical-600 mt-1">
                당신의 손끝에 새겨진 인생의 흔적...
              </span>
            </button>
          </div>
        </div>

        <div className="mt-12 text-center text-xs text-mystical-500 font-light">
          <p>지혜로운 도사의 눈으로 보는 당신의 운명</p>
          <p className="mt-2">© 2025 JunnieLee - junhanhee430@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
