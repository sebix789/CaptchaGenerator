import styled from 'styled-components';

export const Logo = styled.div`
  display: flex;
  text-align: center;
  margin: 2rem 4rem 4rem 2rem;
  img {
    height: 100px;
  }
  @media (min-width: 769px) {
    width: 20vw;
    height: 20vh;
  }
  @media (max-width: 768px) {
    width: 40vw;
    height: 15vh;
  }
`;

export const CaptchaButtons = styled.div`
  display: flex;
  margin: auto;
  border-color: black;
  text-align: center;
  margin-top:3rem;
  gap: 2rem;

  @media (min-width: 769px) {
    justify-content: space-between;
    width: 60vw;
    flex-direction:row;
    button {
      position: relative;
      width: 25vw;
      margin-bottom: 10vh;
      padding: 15vh 2vh;
    }
  }

  @media (max-width: 768px) {
    flex-direction:column;
    button {
      display: flex;
      clear: both;
      margin: auto;
      width: 50vw;
      margin-bottom: 5vh;
      padding: 12vh 2vh;
    }
`;

export const Title = styled.div`
  display: flex;
  margin: auto;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  max-width: 40%;
  justify-content: center;
`
export const HistoryButton = styled.div`
  display: flex;
  text-align: center;
  float: right;
  margin: 2rem 2rem 4rem 4rem;
`
export const Top = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-between
`