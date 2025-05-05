import { useState } from "react";
import { useNavigate } from "react-router-dom";

// TODO: Gemini API 연동하여 실제 분석 로직 구현
const analyzeHandImages = async (
  leftHandImage: File,
  rightHandImage: File
): Promise<string> => {
  console.log(
    "Analyzing hand images:",
    leftHandImage.name,
    rightHandImage.name
  );
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // Simulate a successful response
  return `손금 분석 결과입니다: 왼손(${leftHandImage.name}), 오른손(${rightHandImage.name}) 파일 분석 완료. 당신의 운명은... (실제 결과는 API 연동 필요)`;
  // Simulate an error response (for testing)
  // throw new Error('손금 이미지 분석 중 오류 발생');
};

export const useHandReading = () => {
  const [leftHandFile, setLeftHandFile] = useState<File | null>(null);
  const [rightHandFile, setRightHandFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    hand: "left" | "right"
  ) => {
    if (event.target.files && event.target.files[0]) {
      if (hand === "left") {
        setLeftHandFile(event.target.files[0]);
      } else {
        setRightHandFile(event.target.files[0]);
      }
      // Reset result/error when a new file is selected
      setResult(null);
      setError(null);
    }
  };

  const handleAnalyze = async () => {
    if (!leftHandFile || !rightHandFile) {
      setError("양손의 사진 파일을 모두 선택해주세요.");
      return;
    }

    setIsLoading(true);
    setResult(null);
    setError(null);

    try {
      const analysisResult = await analyzeHandImages(
        leftHandFile,
        rightHandFile
      );
      setResult(analysisResult);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "알 수 없는 오류가 발생했습니다."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleShare = () => {
    // TODO: 실제 공유 기능 구현 (Web Share API 등 활용)
    if (result) {
      console.log("Sharing result:", result);
      alert("결과가 공유되었습니다! (구현 필요)");
    } else {
      alert("공유할 결과가 없습니다.");
    }
  };

  const handleGoHome = () => {
    navigate("/"); // HomePage로 이동
  };

  return {
    leftHandFile,
    rightHandFile,
    isLoading,
    result,
    error,
    handleFileChange,
    handleAnalyze,
    handleShare,
    handleGoHome,
  };
};
