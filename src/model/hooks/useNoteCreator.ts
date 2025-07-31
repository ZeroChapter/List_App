import { useState } from "react";
import { useItem } from "../store/useItem";
import { idGenerator } from "../IdGenerator";
import type { ItemData } from "../types";

export const useNoteCreator = () => {
  const [tag, setTag] = useState<string | null>(null);
  const [text, setText] = useState<string | null>(null);
  const { addItem } = useItem();

  const addNewItem = () => {
    if (text && tag) {
      addItem({
        text: text,
        tag: tag,
        id: idGenerator(),
      } as ItemData);
      setText(null);
    }
  };

  return {
    tag,
    text,
    setTag,
    setText,
    addNewItem,
  };
};

export const useDeleteItem = () => {
  const { delItem } = useItem();

  const deleteItem = (id: number) => {
    if (id) {
      delItem(id);
    }
  };
  return {
    deleteItem,
  };
};
