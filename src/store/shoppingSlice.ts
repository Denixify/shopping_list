import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ShoppingItemType } from "../types";

interface ShoppingState {
  items: ShoppingItemType[];
}

const loadFromLocalStorage = (): ShoppingItemType[] => {
  try {
    const savedData = localStorage.getItem("shopping");

    if (savedData) {
      return JSON.parse(savedData);
    }
  } catch (error) {
    console.error("Не удалось загрузить данные из localStorage:", error);
  }

  return [];
};

const initialState: ShoppingState = {
  items: loadFromLocalStorage(),
};

const shoppingSlice = createSlice({
  name: "shopping",
  initialState,
  reducers: {
    addItem: (
      state,
      action: PayloadAction<{
        title: string;
        category: ShoppingItemType["category"];
      }>,
    ) => {
      const newItem = {
        id: Date.now().toString(),
        title: action.payload.title,
        category: action.payload.category,
        isBought: false,
      };

      state.items.push(newItem);
    },
    toggleBought: (state, action: PayloadAction<string>) => {
      const boughtItem = state.items.find((item) => item.id === action.payload);

      if (boughtItem) {
        boughtItem.isBought = !boughtItem.isBought;
      }
    },
    deleteItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    editItem: (
      state,
      action: PayloadAction<{ id: string; newTitle: string }>,
    ) => {
      const editingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );

      if (editingItem) {
        editingItem.title = action.payload.newTitle;
      }
    },
    clearList: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, toggleBought, deleteItem, editItem, clearList } =
  shoppingSlice.actions;
export default shoppingSlice.reducer;
