import React, { createContext, useContext, useState } from "react";
import { CaptchaContextType } from "../types/CaptchaContextType";
import { CaptchaProviderProps } from "../props/CaptchaProviderProps";

const CaptchaContext = createContext<CaptchaContextType | undefined>(undefined);

export const useCaptcha = (): CaptchaContextType => {
  const context = useContext(CaptchaContext);
  if (!context) {
    throw new Error("useCaptcha must be used within a CaptchaProvider");
  }
  return context;
};

export const CaptchaProvider: React.FC<CaptchaProviderProps> = ({
  children,
}) => {
  const [imageData, setImageData] = useState<string | null>(null);
  const [captchaText, setCaptchaText] = useState<string>("");
  const [modelPrediction, setModelPrediction] = useState<string>("");

  return (
    <CaptchaContext.Provider
      value={{
        imageData,
        setImageData,
        captchaText,
        setCaptchaText,
        modelPrediction,
        setModelPrediction,
      }}
    >
      {children}
    </CaptchaContext.Provider>
  );
};
