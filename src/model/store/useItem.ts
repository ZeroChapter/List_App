import { useContext } from "react";
import type { NoteContextType } from "../types";
import { NoteContext } from "./NotesContext";

export const useItem = (): NoteContextType => {
  const context = useContext(NoteContext);
  if (!context) {
    throw new Error("useItem must be used within a NoteProvider");
  }
  return context;
};
