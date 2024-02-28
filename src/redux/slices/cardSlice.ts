import { cardState, itemsState } from "@/lib/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: itemsState = {
  count: 0,
  cards: [
    {
      id: 0,
      name: "French Fries",
      category: "side",
      price: 15,
      cost: 8,
      options: ["small", "medium", "large"],
      stock: 100,
    },
  ],
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<cardState>) => {
      state.cards.push(action.payload);
      state.count++;
    },
    saveCard: (state, action: PayloadAction<cardState>) => {
      state.cards = [...state.cards, action.payload];
    },
    removeCard: (state, action: PayloadAction<number>) => {
      state.cards = state.cards.filter((card) => card.id !== action.payload);
    },
  },
});

export const { addCard, saveCard, removeCard } = cardsSlice.actions;
export default cardsSlice.reducer;
