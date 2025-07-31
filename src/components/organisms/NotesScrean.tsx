import React, { useMemo, useEffect, useState } from "react";
import { SettingsProvider } from "src/model/store/SettingsContext";
import { SettingsPanel } from "src/components/atoms/SetttingsPanel";
import { ItemContainer } from "src/components/molecules/ItemContainer";
import { useItem } from "src/model/store/useItem";
import { useSettings } from "src/model/store/useSettings";
import type { ItemData } from "src/model/types";
import { PopUp } from "src/styles/styles";
import { NoteCreator } from "./NoteCreator";

export const NotesScrean: React.FC = () => {
  const { items } = useItem();
  const [itemList, setItemList] = useState<ItemData[]>(items);
  const { showNoteCreator } = useSettings();

  useEffect(() => {
    setItemList(items);
  }, [items]);

  const itemsByTag = useMemo(() => {
    return itemList.reduce<Record<string, ItemData[]>>((acc, item) => {
      if (!acc[item.tag]) {
        acc[item.tag] = [];
      }
      acc[item.tag].push(item);
      return acc;
    }, {});
  }, [itemList]);

  return (
    <>
      <SettingsPanel />
      <div>
        {Object.entries(itemsByTag).map(([tag, items]) => (
          <ItemContainer key={tag} items={items} />
        ))}
      </div>
      <PopUp $active={showNoteCreator}>
        <NoteCreator />
      </PopUp>
    </>
  );
};
