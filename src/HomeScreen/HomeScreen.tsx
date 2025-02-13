import { Logo, CaptchaButtons, Title, HistoryButton, Top } from './HomeScreenStyle';
import { History } from "lucide-react"
import {Link} from 'react-router-dom'
import { Button } from "components/ui/button"

function HomeScreen() {
  return (
    <div className="page">
      <Top>
        <Logo>
          <img src="./images/logo192.png" alt="reactlogo" />
        </Logo>
        <HistoryButton>
          <Button variant="outline" className="historyButton"> <History /> History</Button>
        </HistoryButton>
      </Top>
      <Title>
        <h2>Wybierz rodzaj Captchy</h2>
      </Title>
      <CaptchaButtons>
          <Button variant="outline" className="photoButton">
            <Link to='generatingScreen'>
              <img src="./images/PhotoCaptchaLogo.svg" alt="PhotoCaptchaLogo" />
              <p>Captcha Obrazkowa</p>
            </Link>
            </Button>
          <Button variant="outline" className="codeButton">
          <Link to='generatingScreen'>
            <img src="./images/CodeCaptchaLogo.svg" alt="PhotoCaptchaLogo" />
            <p>Captcha Tekstowa</p>
          </Link>
          </Button>    
      </CaptchaButtons>
    </div>
  );
}

export default HomeScreen;