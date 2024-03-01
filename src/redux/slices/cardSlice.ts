import { getCardsFirebase } from "@/lib/actions";
import { cardState, itemsState } from "@/lib/types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define Initial State
const initialState: itemsState = {
  count: 0,
  cards: [],
};

// Define Async Functions linked to Firebase
export const getCardsFromFirebase = createAsyncThunk(
  "cards/getCards",
  async () => {
    const res = await getCardsFirebase();
    return res as cardState[];
  }
);

// Define the Reducer
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
    addCount: (state) => {
      state.count++;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        getCardsFromFirebase.fulfilled,
        (state, action: PayloadAction<cardState[]>) => {
          state.cards = action.payload;
          state.count = action.payload.length;
        }
      )
  },
});

export const { addCard, saveCard, removeCard, addCount } = cardsSlice.actions;
export default cardsSlice.reducer;
