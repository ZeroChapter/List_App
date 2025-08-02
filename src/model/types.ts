export type ItemData = {
  text: string;
  done: boolean;
  id: number;
  tag: string;
};

export type NoteContextType = {
  items: ItemData[];
  delItem: (id: number) => void;
  addItem: (newItem: ItemData) => void;
  findItem: (id: number) => ItemData | undefined;
  removeNote: (newNote: ItemData[]) => void;
  itemHandler: (id: number, done: boolean) => void;
  editItem: (id: number, newText: string, newTag: string) => void;
};

export type SettingsContextType = {
  visibleEditing: boolean;
  showNoteCreator: boolean;
  setVisibleEditing: (bool: boolean) => void;
  switchVisible: () => void;
  switchNoteCreator: () => void;
  filter: "all" | "done" | "not-done";
  setFilter: (state: "all" | "done" | "not-done") => void;
  editNote: number | null;
  setEditNote: (item: number | null) => void;
};

export type ColorPick = {
  hex: string;
  activ: boolean;
};
