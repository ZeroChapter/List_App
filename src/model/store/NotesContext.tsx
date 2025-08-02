import React, { createContext, useEffect, useState } from "react";
import type { NoteContextType, ItemData } from "../types";

export const NoteContext = createContext<NoteContextType | undefined>(
  undefined
);

export const NoteProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [items, setItems] = useState<ItemData[]>(() => {
    try {
      const savedData = localStorage.getItem("notes");
      return savedData ? JSON.parse(savedData) : [];
    } catch (error) {
      console.error("Failed to parse notes from localStorage", error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("notes", JSON.stringify(items));
    } catch (error) {
      console.error("Failed to save notes to localStorage", error);
    }
  }, [items]);

  const addItem = (newItem: ItemData) => {
    setItems((prev) => [...prev, newItem]);
  };

  const delItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const findItem = (id: number): ItemData | undefined => {
    return items.find((el) => el.id === id);
  };

  const removeNote = (newItems: ItemData[]) => {
    setItems(newItems);
  };

  const itemHandler = (id: number, done: boolean) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, done } : item))
    );
  };

  const editItem = (id: number, newText: string, newTag: string) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, text: newText, tag: newTag } : item
      )
    );
  };

  return (
    <NoteContext.Provider
      value={{
        items,
        addItem,
        delItem,
        findItem,
        removeNote,
        itemHandler,
        editItem,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};
