import { Back, Auto, Title, GenerateButton } from "./GenerateCodeCaptchaStyle";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "components/ui/button";
import { Switch } from "components/ui/switch";

const GenerateCodeCaptcha = () => {
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
        <Title>
          <h2>Wygeneruj Captche z Kodem</h2>
        </Title>
        <GenerateButton>
          <Button variant="rounded" className="px-8 py-4 text-lg h-14">
            <Link to="captchaCode">
              <p>GENERUJ CAPTCHE</p>
            </Link>
          </Button>
        </GenerateButton>
      </div>
    </div>
  );
};

export default GenerateCodeCaptcha;
