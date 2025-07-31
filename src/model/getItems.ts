import type { ItemData } from "./types";

export const getItems = (): ItemData[] => {
  const response = localStorage.getItem("items");
  if (!response) return [];

  try {
    const resulte: ItemData[] = JSON.parse(response);
    return resulte;
  } catch (error) {
    console.error("Error parsing items from localStorage:", error);
    return [];
  }
};
