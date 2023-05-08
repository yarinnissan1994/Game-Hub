import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchInput?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchInput: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchInput) => set(() => ({ gameQuery: { searchInput } })),
  setGenreId: (genreId) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, genreId, searchInput: "" },
    })),
  setPlatformId: (platformId) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, platformId, searchInput: "" },
    })),
  setSortOrder: (sortOrder) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, sortOrder, searchInput: "" },
    })),
}));

export default useGameQueryStore;
