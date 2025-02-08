import { Logo, CaptchaButtons, StyledButton } from './HomeScreenStyle';
import {Link} from 'react-router-dom'

function HomeScreen() {
  return (
    <div className="page">
      <Logo>
        <img src="./logo192.png" alt="reactlogo" />
      </Logo>
      <CaptchaButtons>
        <Link to='generatingScreen'>
          <StyledButton className="photoButton">
              photo button
          </StyledButton>
        </Link>
        <StyledButton className="codeButton">code button</StyledButton>
      </CaptchaButtons>
      <StyledButton className="historyButton">history button</StyledButton>
    </div>
  );
}

export default HomeScreen;