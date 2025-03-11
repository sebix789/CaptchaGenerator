import styled from "styled-components";

export const Page = styled.div`
  background-color: #f1f8f1;
  height: 150vh;
  width: 100vw;
`;

export const Back = styled.div`
  display: flex;
  text-align: center;
  float: left;
  margin: 2rem 4rem 4rem 2rem;
`;
export const Auto = styled.div`
  clear: both;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 4rem;
  gap: 1rem;
`;
export const CaptchaButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 4rem;
  border-radius: 16px;
`;
export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4rem;
  border: solid 2px #18c518;
`;
export const CaptchaInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 4rem;
  border-radius: 16px;
  max-width: var(--input-max-width, 400px);
  width: 100%;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CheckmarkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #18c518;
  font-size: 1.5rem;
  font-weight: 600;
`;
