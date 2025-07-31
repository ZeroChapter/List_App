import React, { useState } from "react";
import { ColorSelect } from "../molecules/ColorsSelect";
import { Container, StyledButtton, CustomInput, Flex } from "src/styles/styles";
import { colors } from "src/styles/colors";
import { useItem } from "src/model/store/useItem";
import type { ItemData } from "src/model/types";
import { useNoteCreator } from "src/model/hooks/useNoteCreator";
import { useSettings } from "src/model/store/useSettings";

export const NoteCreator: React.FC = () => {
  const { tag, text, setTag, setText, addNewItem } = useNoteCreator();
  const { switchNoteCreator } = useSettings();

  return (
    <Container color={tag ? tag : colors.alternative}>
      <CustomInput
        value={text ? text : ""}
        onChange={(e) => setText(e.target.value)}
        placeholder="Введите текст заметки"
      ></CustomInput>
      <ColorSelect setColor={setTag} />
      <Flex dir="row" $justify="end">
        <StyledButtton $border={colors.cross} onClick={switchNoteCreator}>
          Закрыть
        </StyledButtton>
        <StyledButtton onClick={addNewItem} $border={colors.green}>
          Добавить
        </StyledButtton>
      </Flex>
    </Container>
  );
};
