import React, { useEffect, useState } from "react";
import { ColorButton, Container } from "src/styles/styles";
import { colors } from "src/styles/colors";
import { ColorPick } from "src/model/types";

interface ColorSelectProps {
  setColor: (color: string) => void;
}

export const ColorSelect: React.FC<ColorSelectProps> = ({ setColor }) => {
  const [activeColor, setActiveColor] = useState<string | null>(null);

  const colorButtons = [
    { hex: colors.tag1 },
    { hex: colors.tag2 },
    { hex: colors.tag3 },
    { hex: colors.tag4 },
    { hex: colors.tag5 },
    { hex: colors.tag6 },
    { hex: colors.tag7 },
    { hex: colors.tag8 },
    { hex: colors.tag9 },
    { hex: colors.tag10 },
    { hex: colors.tag11 },
    { hex: colors.tag12 },
    { hex: colors.tag13 },
    { hex: colors.tag14 },
  ];

  const pickColor = (hex: string) => {
    setActiveColor(hex);
    setColor(hex);
  };

  return (
    <Container color={colors.primary} $padding="0px" $margin="0px">
      {colorButtons.map((el) => (
        <ColorButton
          onClick={() => {
            pickColor(el.hex);
          }}
          $color={el.hex}
          $activ={activeColor === el.hex}
          key={el.hex}
        ></ColorButton>
      ))}
    </Container>
  );
};
