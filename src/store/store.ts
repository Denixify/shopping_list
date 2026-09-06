import { configureStore } from "@reduxjs/toolkit";
import shoppingReducer from "./shoppingSlice";

export const store = configureStore({
  reducer: {
    shopping: shoppingReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();

  localStorage.setItem("shopping", JSON.stringify(state.shopping.items));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
