import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "src/styles/colors";
import { StyledCheckBox } from "src/styles/styles";

interface CheckboxProps {
  onChange: (value: boolean) => void;
  cheked: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({ onChange, cheked }) => {
  const [isActive, setIsActive] = useState(cheked);

  const handleChange = () => {
    const newValue = !isActive;
    setIsActive(newValue);
    onChange(newValue);
  };

  return <StyledCheckBox $active={isActive} onClick={handleChange} />;
};
