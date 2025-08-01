import React, { createContext, useState } from "react";
import type { SettingsContextType } from "../types";

export const SettingsContext = createContext<SettingsContextType | undefined>(
  undefined
);

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [visibleEditing, setVisibleEditing] = useState<boolean>(false);
  const [showNoteCreator, setShowNoteCreator] = useState<boolean>(false);

  const switchVisible = () => {
    visibleEditing ? setVisibleEditing(false) : setVisibleEditing(true);
  };
  const switchNoteCreator = () => {
    showNoteCreator ? setShowNoteCreator(false) : setShowNoteCreator(true);
  };

  const [filter, setFilter] = useState<"all" | "done" | "not-done">("all");

  return (
    <SettingsContext.Provider
      value={{
        visibleEditing,
        showNoteCreator,
        setVisibleEditing,
        switchVisible,
        switchNoteCreator,
        filter,
        setFilter,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
