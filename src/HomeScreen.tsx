import { Logo, CaptchaButtons, StyledButton } from './HomeScreenStyle';

function HomeScreen() {
  return (
    <div className="page">
      <Logo>
        <img src="./logo192.png" alt="reactlogo" />
      </Logo>
      <CaptchaButtons>
        <StyledButton className="photoButton">photo button</StyledButton>
        <StyledButton className="codeButton">code button</StyledButton>
      </CaptchaButtons>
      <StyledButton className="historyButton">history button</StyledButton>
    </div>
  );
}

export default HomeScreen;