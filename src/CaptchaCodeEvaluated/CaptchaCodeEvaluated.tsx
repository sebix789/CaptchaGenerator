import {
  Back,
  Auto,
  CaptchaButton,
  ImageContainer,
  Page,
  CaptchaInput,
  Content,
  CheckmarkContainer,
} from "./CaptchaCodeEvaluatedStyle";
import { ArrowLeft } from "lucide-react";
import { Fireworks } from "@fireworks-js/react";
import type { FireworksHandlers } from "@fireworks-js/react";
import { Checkmark } from "react-checkmark";
import { Link } from "react-router-dom";
import { Button } from "components/ui/button";
import { Switch } from "components/ui/switch";
import { Input } from "components/ui/input";
import { useState, useRef } from "react";

const CaptchaCodeEvaluated = () => {
  const [fireworks, setFireworks] = useState(false);
  const ref = useRef<FireworksHandlers>(null);

  const handleConfetti = () => {
    setFireworks(true);
    setTimeout(() => {
      setFireworks(false);
    }, 15000);
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
            onClick={handleConfetti}
            variant="rounded"
            className="px-8 py-4 text-lg h-14"
          >
            Gratulacje! Model Wygrał
          </Button>
        </CaptchaButton>
        <ImageContainer>
          <img src="/images/CaptchaExampleImage.png" alt="ExampleCaptcha" />
        </ImageContainer>
        <CheckmarkContainer>
          <Checkmark />
          <p>Poprawnie Rozwiązana!</p>
        </CheckmarkContainer>
        <CaptchaInput>
          <Input
            disabled
            size="lg"
            border="success"
            placeholderVariant="success"
            placeholder="Predykcja modelu:"
          />
        </CaptchaInput>
      </Content>
      {fireworks && (
        <Fireworks
          ref={ref}
          options={{
            opacity: 0.5,
            intensity: 40,
            explosion: 15,
            traceSpeed: 5,
            particles: 75,
          }}
          style={{
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            position: "fixed",
          }}
        />
      )}
    </Page>
  );
};

export default CaptchaCodeEvaluated;
