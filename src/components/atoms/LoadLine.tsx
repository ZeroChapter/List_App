import React from "react";
import { LineContainer, LinePoint } from "src/styles/styles";

interface LoadLineProps {
  activPoints: number;
  allPoints: number;
}

export const LoadLine: React.FC<LoadLineProps> = ({
  allPoints,
  activPoints,
}) => {
  const pointWidth = 100 / allPoints;

  return (
    <LineContainer>
      {Array.from({ length: activPoints }).map((_, i) => (
        <LinePoint key={`active-${i}`} $done={true} $width={pointWidth} />
      ))}
      {Array.from({ length: allPoints - activPoints }).map((_, i) => (
        <LinePoint key={`inactive-${i}`} $done={false} $width={pointWidth} />
      ))}
    </LineContainer>
  );
};
