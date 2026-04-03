import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type BookmarkState = {
  ids: string[];
  toggle: (id: string) => void;
};

export const useBookmarks = create<BookmarkState>()(
  persist(
    (set, get) => ({
      ids: [],
      toggle: (id) => {
        const ids = get().ids;
        set({ ids: ids.includes(id) ? ids.filter((x) => x !== id) : [...ids, id] });
      }
    }),
    { name: 'ddnewsup-bookmarks', storage: createJSONStorage(() => AsyncStorage) }
  )
);
