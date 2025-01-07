import styled from 'styled-components';

export const Logo = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  img {
    height: 100px;
  }

  @media (min-width: 769px) {
    width: 20vw;
    height: 20vh;
    margin-bottom: 5vh;
    margin-top: 5vh;
  }

  @media (max-width: 768px) {
    width: 40vw;
    height: 15vh;
    margin-bottom: 5vh;
    margin-top: 5vh;
  }
`;

export const CaptchaButtons = styled.div`
  display: block;
  margin: auto;
  border-color: black;
  text-align: center;

  @media (min-width: 769px) {
    justify-content: space-between;
    width: 60vw;

    button {
      position: relative;
      width: 25vw;
      margin-bottom: 10vh;
      padding: 15vh 0;
    }
  }

  @media (max-width: 768px) {
    button {
      display: block;
      clear: both;
      margin-left: auto;
      margin-right: auto;
      width: 50vw;
      margin-bottom: 5vh;
      padding: 12vh 0;
    }
  }
`;

export const StyledButton = styled.button`
  display: block;
  background-color: #61dafb;
  border-radius: 20px;
  border-width: 0 2px 2px 0;
  margin: 0 auto;

  &:hover {
    background-color: lightblue;
  }

  @media (min-width: 769px) {
    &.photoButton {
      float: left;
    }

    &.codeButton {
      float: right;
    }

    &.historyButton {
      width: 20vw;
      padding: 2vh 0;
      margin-top: 5vh;
    }
  }

  @media (max-width: 768px) {
    &.historyButton {
      margin-top: 7vh;
      width: 50vw;
      padding: 2vh 0;
    }
  }
`;