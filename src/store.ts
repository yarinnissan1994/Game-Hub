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
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setPlatformId: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  setSortOrder: (sortOrder) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
}));

export default useGameQueryStore;
