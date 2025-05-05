import React from "react";
import { useHandReading } from "../hooks/useHandReading";

const HandReadPage: React.FC = () => {
  const {
    leftHandFile,
    rightHandFile,
    isLoading,
    result,
    error,
    handleFileChange,
    handleAnalyze,
    handleShare,
    handleGoHome,
  } = useHandReading();

  return (
    <div className="min-h-screen bg-mystical-100 bg-opacity-90 bg-hangi-texture bg-cover bg-center">
      <div className="container-custom flex flex-col items-center">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <h2 className="text-2xl md:text-3xl font-medium text-mystical-800 mb-2">
              손금 보기
            </h2>
            <p className="text-mystical-600 text-sm md:text-base">
              당신의 왼손과 오른손 사진을 각각 업로드해주세요. 손금에 담긴 삶의
              실마리를 찾아드립니다.
            </p>
          </div>

          <div className="w-40 h-40 mx-auto mb-6 relative">
            <img
              src="/assets/readHands.png"
              alt="손금 보는 도사"
              className="w-full h-full object-contain"
            />
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-amber-300 rounded-full opacity-60 animate-candle-flicker"></div>
          </div>

          <div className="card mb-6">
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="left-hand-input"
                  className="block text-mystical-700 text-sm font-medium mb-2"
                >
                  왼손 사진 (과거와 타고난 기운)
                </label>
                <input
                  id="left-hand-input"
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, "left")}
                  className="input-file"
                />
                {leftHandFile && (
                  <p className="text-xs text-mystical-600 italic mt-1">
                    ({leftHandFile.name})
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="right-hand-input"
                  className="block text-mystical-700 text-sm font-medium mb-2"
                >
                  오른손 사진 (현재와 미래의 기운)
                </label>
                <input
                  id="right-hand-input"
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, "right")}
                  className="input-file"
                />
                {rightHandFile && (
                  <p className="text-xs text-mystical-600 italic mt-1">
                    ({rightHandFile.name})
                  </p>
                )}
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={handleAnalyze}
                disabled={isLoading || !leftHandFile || !rightHandFile}
                className={`btn w-full flex justify-center items-center ${
                  isLoading || !leftHandFile || !rightHandFile
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-mystical-800"
                }`}
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>분석 중...</span>
                  </>
                ) : (
                  "손금 분석하기"
                )}
              </button>
            </div>
          </div>

          {error && (
            <div
              className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6"
              role="alert"
            >
              <p>오류: {error}</p>
            </div>
          )}

          {result && (
            <div className="card border-mystical-300 bg-mystical-100 mb-6">
              <div className="relative">
                <div className="absolute -top-3 -right-3 w-3 h-3 bg-amber-300 rounded-full opacity-60 animate-candle-flicker"></div>
                <div className="absolute -bottom-3 -left-3 w-3 h-3 bg-amber-300 rounded-full opacity-60 animate-candle-flicker"></div>
                <h3 className="text-xl font-medium text-mystical-800 mb-4">
                  분석 결과
                </h3>
                <div className="text-mystical-700 leading-relaxed whitespace-pre-line">
                  {result}
                </div>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleShare}
                    className="btn bg-mystical-600 hover:bg-mystical-700 flex-1"
                  >
                    결과 공유하기
                  </button>
                  <button
                    onClick={handleGoHome}
                    className="btn bg-mystical-500 hover:bg-mystical-600 flex-1"
                  >
                    처음으로 돌아가기
                  </button>
                </div>
              </div>
            </div>
          )}

          {!result && !isLoading && (
            <button
              onClick={handleGoHome}
              className="w-full py-3 text-mystical-600 hover:text-mystical-800 transition-colors text-sm flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              다른 운세 보기 (홈)
            </button>
          )}
        </div>
      </div>
      <div className="mt-12 text-center text-xs text-mystical-500 font-light">
        <p>© 2025 JunnieLee - junhanhee430@gmail.com</p>
      </div>
    </div>
  );
};

export default HandReadPage;
