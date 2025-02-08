import styled from 'styled-components';

export const Back = styled.div`
  display: block;
  margin: auto;
  text-align: center;
`
export const Auto = styled.div`
  display: block;
  margin: auto;
  text-align: center;
`
export const Title = styled.div`
  display: block;
  margin: auto;
  text-align: center;
`
export const Category = styled.div`
  display: block;
  margin: auto;
  text-align: center;
`
export const Button = styled.button`
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