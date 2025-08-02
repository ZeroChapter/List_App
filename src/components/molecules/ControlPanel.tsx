import React from "react";
import { Flex, Icon, StyledButtton } from "src/styles/styles";
import { Icons } from "src/styles/iconPath";
import { colors } from "src/styles/colors";
import { useDeleteItem } from "src/model/hooks/useNoteCreator";
import { useSettings } from "src/model/store/useSettings";

interface ControlPanelProps {
  id: number;
}

export const ControlPanel: React.FC<ControlPanelProps> = ({ id }) => {
  const { deleteItem } = useDeleteItem();
  const { setEditNote } = useSettings();
  const { switchNoteCreator } = useSettings();

  return (
    <Flex dir="column" $gap="2px">
      <StyledButtton
        $border={colors.cross}
        $margin="0px"
        onClick={() => deleteItem(id)}
      >
        <Icon
          $color={colors.cross}
          $imageUrl={Icons.crossIcon}
          $scale={0.67}
        ></Icon>
      </StyledButtton>
      <StyledButtton
        $margin="0px"
        onClick={() => {
          setEditNote(id), switchNoteCreator();
        }}
      >
        <Icon
          $color={colors.green}
          $imageUrl={Icons.penIcon}
          $scale={0.67}
        ></Icon>
      </StyledButtton>
    </Flex>
  );
};
