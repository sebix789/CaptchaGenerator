import React, { useState, useEffect, useRef } from "react";
import {
  Back,
  Auto,
  CaptchaButton,
  ImageContainer,
  Page,
  CaptchaInput,
  Content,
  FailmarkContainer,
} from "./CaptchaCodeErrorStyle";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "components/ui/button";
import { Switch } from "components/ui/switch";
import { Input } from "components/ui/input";
import Failmark from "components/ui/failmark";
import Snake from "components/ui/snake";
import { useCaptcha } from "../CaptchaContext/CatpchaContext";

const CaptchaCodeError = () => {
  const [snake, setSnake] = useState(false);
  const [inputVisible, setInputVisible] = useState(true);
  const { imageData, modelPrediction } = useCaptcha();
  const inputRef = useRef<HTMLDivElement>(null);
  const [snakePosition, setSnakePosition] = useState({ top: 0, left: 0 });

  const handleSnake = () => {
    setSnake(true);
  };

  const handleEat = () => {
    setTimeout(() => {
      setInputVisible(false);
    }, 4000);
  };

  useEffect(() => {
    if (inputRef.current) {
      const rect = inputRef.current.getBoundingClientRect();
      setSnakePosition({ top: rect.top, left: rect.left });
    }
  }, [snake]);

  return (
    <Page>
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
      <Content>
        <CaptchaButton>
          <Button
            variant="rounded"
            className="px-8 py-4 text-lg h-14"
            onClick={handleSnake}
          >
            Tym razem się nie udało &#x1F641;
          </Button>
        </CaptchaButton>
        <ImageContainer>
          {imageData && <img src={imageData} alt="CAPTCHA" />}
        </ImageContainer>
        <FailmarkContainer>
          <Failmark />
          <p>Błędne rozwiązanie!</p>
        </FailmarkContainer>
        <CaptchaInput ref={inputRef}>
          {snake && <Snake onEat={handleEat} position={snakePosition} />}
          {inputVisible && (
            <Input
              disabled
              size="lg"
              border="danger"
              placeholderVariant="danger"
              placeholder={modelPrediction}
            />
          )}
        </CaptchaInput>
      </Content>
    </Page>
  );
};

export default CaptchaCodeError;
