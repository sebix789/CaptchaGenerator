import React, { useState } from "react";
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

const CaptchaCodeError = () => {
  const [snake, setSnake] = useState(false);
  const [inputVisible, setInputVisible] = useState(true);

  const handleSnake = () => {
    setSnake(true);
  };

  const handleEat = () => {
    setTimeout(() => {
      setInputVisible(false);
    }, 4000);
  };

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
          <img src="/images/CaptchaExampleImage.png" alt="ExampleCaptcha" />
        </ImageContainer>
        <FailmarkContainer>
          <Failmark />
          <p>Błędne rozwiązanie!</p>
        </FailmarkContainer>
        <CaptchaInput>
          {snake && <Snake onEat={handleEat} />}
          {inputVisible && (
            <Input
              disabled
              size="lg"
              border="danger"
              placeholderVariant="danger"
              placeholder="Predykcja modelu:"
            />
          )}
        </CaptchaInput>
      </Content>
    </Page>
  );
};

export default CaptchaCodeError;
