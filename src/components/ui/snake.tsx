import * as React from "react";
import styled, { keyframes, css } from "styled-components";

const moveSnake = keyframes`
  0% { transform: translateX(-25vw); }
  100% { transform: translateX(120vw); }
`;

const openMouthTop = keyframes`
  from { transform: rotate(0); }
  to { transform: rotate(-35deg); }
`;

const closeMouthTop = keyframes`
  from { transform: rotate(-35deg); }
  to { transform: rotate(0); }
`;

const openMouthBottom = keyframes`
  from { transform: rotate(0); }
  to { transform: rotate(35deg); }
`;

const closeMouthBottom = keyframes`
  from { transform: rotate(35deg); }
  to { transform: rotate(0); }
`;

const growSegment = keyframes`
  from { width: 0; }
  to { width: 50px; }
`;

const shiftSnake = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50px); }
`;

const SnakeContainer = styled.div`
  position: absolute;
  left: 20px;
  bottom: 120px;
  display: flex;
  align-items: center;
  z-index: 2;
  animation: ${moveSnake} 15s linear forwards;
`;

const SnakeSegment = styled.div<{ growing?: boolean }>`
  width: ${({ growing }) => (growing ? "0" : "50px")};
  height: 50px;
  background-color: green;
  animation: ${({ growing }) =>
    growing
      ? css`
          ${growSegment} 3s ease-out forwards
        `
      : "none"};
  transition: width 0s 3s;
`;

const SnakeHeadContainer = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
`;

const SnakeHeadTop = styled(SnakeSegment)<{
  mouthOpen: boolean;
  isInitialized: boolean;
}>`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  border-radius: 0 50% 0 0;
  ${({ isInitialized, mouthOpen }) =>
    isInitialized
      ? css`
          animation: ${mouthOpen ? openMouthTop : closeMouthTop} 1s ease-in-out
            forwards;
        `
      : "animation: none;"}
`;

const SnakeHeadBottom = styled(SnakeSegment)<{
  mouthOpen: boolean;
  isInitialized: boolean;
}>`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 25px;
  border-radius: 0 0 50% 0;
  ${({ isInitialized, mouthOpen }) =>
    isInitialized
      ? css`
          animation: ${mouthOpen ? openMouthBottom : closeMouthBottom} 1s
            ease-in-out forwards;
        `
      : "animation: none;"}
`;

const SnakeTail = styled(SnakeSegment)`
  border-radius: 50% 0 0 50%;
`;

const GrowingContainer = styled.div`
  display: flex;
  animation: ${shiftSnake} 1s ease-out forwards;
`;

const Eye = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  background-color: white;
  border-radius: 50%;
  top: 5px;
  left: 10px;

  &:nth-child(2) {
    left: 30px;
  }
`;

const Snake: React.FC<{ onEat: () => void }> = ({ onEat }) => {
  const [segments, setSegments] = React.useState(
    Array(6)
      .fill(0)
      .map((_, i) => ({ id: i, growing: false }))
  );
  const [mouthOpen, setMouthOpen] = React.useState(false);
  const [isInitialized, setIsInitialized] = React.useState(false);
  const [growthComplete, setGrowthComplete] = React.useState(false);

  React.useEffect(() => {
    if (growthComplete) return;

    const initTimer = setTimeout(() => {
      setIsInitialized(true);
      setMouthOpen(true);
      onEat();

      let segmentIndex = 0;
      const segmentInterval = setInterval(() => {
        if (segmentIndex < 4) {
          setSegments((prevSegments) => [
            ...prevSegments,
            { id: Date.now() + segmentIndex, growing: true },
          ]);
          segmentIndex++;
        } else {
          clearInterval(segmentInterval);
          setTimeout(() => {
            setSegments((prevSegments) =>
              prevSegments.map((seg) => ({ ...seg, growing: false }))
            );
            setGrowthComplete(true);
            setMouthOpen(false);
          }, 2000);
        }
      }, 500);
    }, 2500);

    return () => clearTimeout(initTimer);
  }, [onEat, growthComplete]);

  return (
    <SnakeContainer>
      <GrowingContainer>
        <SnakeTail />
        {segments.map((segment, index) => (
          <SnakeSegment key={segment.id} growing={segment.growing} />
        ))}
        <SnakeHeadContainer>
          <SnakeHeadTop mouthOpen={mouthOpen} isInitialized={isInitialized} />
          <SnakeHeadBottom
            mouthOpen={mouthOpen}
            isInitialized={isInitialized}
          />
          <Eye />
        </SnakeHeadContainer>
      </GrowingContainer>
    </SnakeContainer>
  );
};

export default Snake;
