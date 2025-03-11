import { Back, Auto, CaptchaButton, ImageContainer } from "./CaptchaCodeStyle";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "components/ui/button";
import { Switch } from "components/ui/switch";

const CaptchaCode = () => {
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
          <img src="/images/CaptchaExampleImage.png" alt="ExampleCaptcha" />
        </ImageContainer>
        <CaptchaButton>
          <Button variant="rounded" className="px-8 py-4 text-lg h-14">
            WYŚLIJ
          </Button>
        </CaptchaButton>
        <CaptchaButton>
          <Button variant="rounded" className="px-8 py-4 text-lg h-14">
            <Link to="correctCaptcha">
              <p>Poprawna</p>
            </Link>
          </Button>
        </CaptchaButton>
        <CaptchaButton>
          <Button variant="rounded" className="px-8 py-4 text-lg h-14">
            <Link to="incorrectCaptcha">
              <p>Niepoprawna</p>
            </Link>
          </Button>
        </CaptchaButton>
      </div>
    </div>
  );
};

export default CaptchaCode;
