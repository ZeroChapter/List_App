import React from "react";
import { colors } from "src/styles/colors";
import { Icons } from "src/styles/iconPath";
import {
  BorderBox,
  Container,
  Flex,
  Icon,
  StyledButtton,
} from "src/styles/styles";
import { useSettings } from "src/model/store/useSettings";
export const SettingsPanel: React.FC = () => {
  const { visibleEditing, switchVisible } = useSettings();
  const { switchNoteCreator, setFilter } = useSettings();

  return (
    <BorderBox $color={colors.text}>
      <Container
        color={colors.primary}
        $width="370px"
        $margin="0px"
        $padding="5px"
      >
        <Flex dir="row" $justify="end">
          <BorderBox $color={colors.text}>
            <Flex dir="row" $justify="end">
              <StyledButtton
                $color={colors.primary}
                $border={colors.text}
                onClick={() => setFilter("not-done")}
              >
                <Icon $color={colors.primary} $imageUrl={Icons.check}></Icon>
              </StyledButtton>
              <StyledButtton
                $color={colors.primary}
                $border={colors.text}
                onClick={() => setFilter("done")}
              >
                <Icon $color={colors.green} $imageUrl={Icons.check}></Icon>
              </StyledButtton>
              <StyledButtton
                $color={colors.primary}
                $border={colors.text}
                onClick={() => setFilter("all")}
              >
                All
              </StyledButtton>
            </Flex>
          </BorderBox>
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
    </BorderBox>
  );
};
