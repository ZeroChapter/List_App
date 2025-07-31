import { useContext } from "react";
import type { SettingsContextType } from "../types";
import { SettingsContext } from "./SettingsContext";

export const useSettings = (): SettingsContextType => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useItem must be used within a SettingsProvider");
  }
  return context;
};
