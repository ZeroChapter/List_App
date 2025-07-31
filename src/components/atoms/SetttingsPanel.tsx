import React from "react";
import { colors } from "src/styles/colors";
import { Icons } from "src/styles/iconPath";
import { Container, Flex, Icon, StyledButtton } from "src/styles/styles";
import { useSettings } from "src/model/store/useSettings";
export const SettingsPanel: React.FC = () => {
  const { visibleEditing, switchVisible } = useSettings();
  const { switchNoteCreator } = useSettings();

  return (
    <Container color={colors.primary} $width="370px">
      <Flex dir="row" $justify="end">
        <StyledButtton $color={colors.primary} $border={colors.text}>
          <Icon $color={colors.primary} $imageUrl={Icons.check}></Icon>
        </StyledButtton>
        <StyledButtton $color={colors.primary} $border={colors.text}>
          <Icon $color={colors.green} $imageUrl={Icons.check}></Icon>
        </StyledButtton>
        <StyledButtton
          onClick={switchVisible}
          $color={visibleEditing ? colors.alternative : colors.primary}
          $border={colors.green}
        >
          <Icon $color={colors.green} $imageUrl={Icons.penIcon}></Icon>
        </StyledButtton>
        <StyledButtton
          onClick={switchNoteCreator}
          $color={colors.primary}
          $border={colors.text}
        >
          <Icon $color={colors.text} $imageUrl={Icons.plus}></Icon>
        </StyledButtton>
      </Flex>
    </Container>
  );
};
