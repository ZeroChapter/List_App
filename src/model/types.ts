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
  newTag: (newTag: string, id: number) => void;
  removeNote: (newNote: ItemData[]) => void;
  itemHandler: (id: number, done: boolean) => void;
};

export type SettingsContextType = {
  visibleEditing: boolean;
  showNoteCreator: boolean;
  setVisibleEditing: (bool: boolean) => void;
  switchVisible: () => void;
  switchNoteCreator: () => void;
  filter: "all" | "done" | "not-done";
  setFilter: (state: "all" | "done" | "not-done") => void;
};

export type ColorPick = {
  hex: string;
  activ: boolean;
};
