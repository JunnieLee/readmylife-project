import React from "react";
import { useFaceReading } from "../hooks/useFaceReading";

const FaceReadPage: React.FC = () => {
  const {
    selectedFile,
    isLoading,
    result,
    error,
    handleFileChange,
    handleAnalyze,
    handleShare,
    handleGoHome,
  } = useFaceReading();

  return (
    <div style={{ padding: "20px" }}>
      <h2>얼굴 관상 보기</h2>
      <p>당신의 얼굴 사진을 업로드해주세요.</p>

      <input type="file" accept="image/*" onChange={handleFileChange} />

      {selectedFile && (
        <p style={{ marginTop: "10px" }}>선택된 파일: {selectedFile.name}</p>
      )}

      <button
        onClick={handleAnalyze}
        disabled={isLoading || !selectedFile}
        style={{ marginTop: "20px", marginRight: "10px" }}
      >
        {isLoading ? "분석 중..." : "관상 분석하기"}
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

export default FaceReadPage;
