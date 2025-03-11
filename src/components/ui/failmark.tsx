import * as React from "react";
import styled, { keyframes } from "styled-components";

const draw = keyframes`
  0% {
    stroke-dasharray: 0, 100;
  }
  100% {
    stroke-dasharray: 100, 0;
  }
`;

const FailIconContainer = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
`;

const FailIconSVG = styled.svg`
  width: 100%;
  height: 100%;
  fill: none;
  stroke: red;
  stroke-width: 2;
  stroke-dasharray: 100, 0;
  animation: ${draw} 2s ease-out forwards;
`;

const Failmark: React.FC = () => {
  return (
    <FailIconContainer>
      <FailIconSVG viewBox="0 0 24 24">
        <circle
          cx="12"
          cy="12"
          r="11"
          stroke="red"
          strokeWidth="2"
          fill="none"
        />
        <path d="M15.707 8.293a1 1 0 0 0-1.414 0L12 10.586 9.707 8.293a1 1 0 0 0-1.414 1.414L10.586 12 8.293 14.293a1 1 0 0 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0 0-1.414z" />
      </FailIconSVG>
    </FailIconContainer>
  );
};

export default Failmark;
