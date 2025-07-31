import React from "react";
import { Flex, Icon, StyledButtton } from "src/styles/styles";
import { Icons } from "src/styles/iconPath";
import { colors } from "src/styles/colors";
import { useDeleteItem } from "src/model/hooks/useNoteCreator";

interface ControlPanelProps {
  id: number;
}

export const ControlPanel: React.FC<ControlPanelProps> = ({ id }) => {
  const { deleteItem } = useDeleteItem();

  return (
    <Flex dir="column" $gap="2px">
      <StyledButtton
        $border={colors.cross}
        $margin="0px"
        onClick={() => deleteItem(id)}
      >
        <Icon $color={colors.cross} $imageUrl={Icons.crossIcon}></Icon>
      </StyledButtton>
      <StyledButtton $margin="0px">
        <Icon $color={colors.green} $imageUrl={Icons.penIcon}></Icon>
      </StyledButtton>
    </Flex>
  );
};
