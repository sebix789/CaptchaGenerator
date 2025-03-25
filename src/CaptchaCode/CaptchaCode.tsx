import React, { useEffect, useState } from "react";
import { useCaptcha } from "../CaptchaContext/CatpchaContext";
import { Back, Auto, CaptchaButton, ImageContainer } from "./CaptchaCodeStyle";
import { ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "components/ui/button";
import { Switch } from "components/ui/switch";
import { CircularProgress } from "components/ui/circular-progress";
import axios from "axios";

const CaptchaCode = () => {
  const [loading, setLoading] = useState(false);
  const {
    imageData,
    setImageData,
    captchaText,
    setCaptchaText,
    setModelPrediction,
  } = useCaptcha();
  const navigate = useNavigate();

  const fetchCaptcha = async () => {
    try {
      const { data } = await axios.get("http://127.0.0.1:5000/codeCaptcha");
      setImageData(data.image);
      setCaptchaText(data.captcha_text);
    } catch (error) {
      console.error("Error fetching CAPTCHA:", error);
    }
  };

  useEffect(() => {
    fetchCaptcha();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSend = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post("http://127.0.0.1:5000/codePredict", {
        image: imageData,
      });

      setModelPrediction(data.modelPrediction);
      console.log(data.modelPrediction);
      console.log(captchaText);
      const isCorrect =
        data.modelPrediction.toUpperCase() === captchaText.toUpperCase();

      navigate(
        isCorrect
          ? "/generatingCode/captchaCode/correctCaptcha"
          : "/generatingCode/captchaCode/incorrectCaptcha"
      );
      setLoading(false);
    } catch (error) {
      console.error("Error sending image to model:", error);
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <Back>
        <Link to="/">
          <Button variant="rounded">
            <ArrowLeft /> Powrót
          </Button>
        </Link>
      </Back>
      <Auto>
        <Switch />
        <p>Autorozwiązywanie</p>
      </Auto>
      <div className="content">
        <CaptchaButton>
          <Button variant="rounded" className="px-8 py-4 text-lg h-14">
            PRZEPISZ KOD Z OBRAZKA
          </Button>
        </CaptchaButton>
        <ImageContainer>
          {imageData && <img src={imageData} alt="CAPTCHA" />}
        </ImageContainer>
        <CaptchaButton>
          {loading ? (
            <CircularProgress />
          ) : (
            <Button
              onClick={handleSend}
              variant="rounded"
              className="px-8 py-4 text-lg h-14"
            >
              WYŚLIJ
            </Button>
          )}
        </CaptchaButton>
      </div>
    </div>
  );
};

export default CaptchaCode;
