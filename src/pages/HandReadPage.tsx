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
    <div style={{ padding: "20px" }}>
      <h2>손금 보기</h2>
      <p>당신의 왼손과 오른손 사진을 각각 업로드해주세요.</p>

      <div style={{ marginBottom: "15px" }}>
        <label htmlFor="left-hand-input">왼손 사진: </label>
        <input
          id="left-hand-input"
          type="file"
          accept="image/*"
          onChange={(e) => handleFileChange(e, "left")}
        />
        {leftHandFile && (
          <span style={{ marginLeft: "10px" }}>({leftHandFile.name})</span>
        )}
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="right-hand-input">오른손 사진: </label>
        <input
          id="right-hand-input"
          type="file"
          accept="image/*"
          onChange={(e) => handleFileChange(e, "right")}
        />
        {rightHandFile && (
          <span style={{ marginLeft: "10px" }}>({rightHandFile.name})</span>
        )}
      </div>

      <button
        onClick={handleAnalyze}
        disabled={isLoading || !leftHandFile || !rightHandFile}
        style={{ marginRight: "10px" }}
      >
        {isLoading ? "분석 중..." : "손금 분석하기"}
      </button>

      {error && (
        <p style={{ color: "red", marginTop: "10px" }}>오류: {error}</p>
      )}

      {result && (
        <div
          style={{
            marginTop: "30px",
            border: "1px solid #ccc",
            padding: "15px",
          }}
        >
          <h3>분석 결과</h3>
          <p>{result}</p>
          <button
            onClick={handleShare}
            style={{ marginRight: "10px", marginTop: "15px" }}
          >
            결과 공유하기
          </button>
          <button onClick={handleGoHome} style={{ marginTop: "15px" }}>
            처음으로 돌아가기
          </button>
        </div>
      )}

      {!result && !isLoading && (
        <button onClick={handleGoHome} style={{ marginTop: "20px" }}>
          다른 운세 보기 (홈)
        </button>
      )}
    </div>
  );
};

export default HandReadPage;
