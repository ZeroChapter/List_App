import React, { useEffect, useState } from "react";
import { ColorSelect } from "../molecules/ColorsSelect";
import { Container, StyledButtton, CustomInput, Flex } from "src/styles/styles";
import { colors } from "src/styles/colors";
import { useNoteCreator } from "src/model/hooks/useNoteCreator";
import { useSettings } from "src/model/store/useSettings";
import { useItem } from "src/model/store/useItem";

export const NoteCreator: React.FC = () => {
  const { tag, text, setTag, setText, addNewItem } = useNoteCreator();
  const { switchNoteCreator, setEditNote, editNote } = useSettings();
  const { editItem, findItem } = useItem();
  const [buttonText, setButtonText] = useState<string>("Добавить");
  const addItemAndClose = () => {
    if (editNote && text && tag) {
      editItem(editNote, text, tag);
      setEditNote(null);
      switchNoteCreator();
    } else {
      addNewItem();
      switchNoteCreator();
    }
  };
  useEffect(() => {
    if (editNote) {
      setButtonText("Изменить");
      const foundItem = findItem(editNote);
      setText(foundItem ? foundItem.text : "");
      setTag(foundItem ? foundItem.tag : "");
    } else {
      setButtonText("Добавить");
      setText("");
      setTag("");
    }
  }, [editNote]);

  const close = () => {
    if (editNote) {
      setEditNote(null);
    }
    switchNoteCreator();
  };

  return (
    <Container color={tag ? tag : colors.alternative}>
      <CustomInput
        value={text ? text : ""}
        onChange={(e) => setText(e.target.value)}
        placeholder="Введите текст заметки"
      ></CustomInput>
      <ColorSelect setColor={setTag} />
      <Flex dir="row" $justify="end">
        <StyledButtton $border={colors.cross} onClick={close}>
          Закрыть
        </StyledButtton>
        <StyledButtton onClick={addItemAndClose} $border={colors.green}>
          {buttonText}
        </StyledButtton>
      </Flex>
    </Container>
  );
};
