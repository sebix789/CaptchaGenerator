export interface CaptchaContextType {
  imageData: string | null;
  setImageData: (data: string | null) => void;
  captchaText: string;
  setCaptchaText: (text: string) => void;
  modelPrediction: string;
  setModelPrediction: (prediction: string) => void;
}
