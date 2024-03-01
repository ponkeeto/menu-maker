import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ToggleState } from "@/lib/types";

const initialState: ToggleState = {
    open: 'close',
    category: 'appetizer',
    id: 0
}

const toggleSlice = createSlice({
    name: 'toggle',
    initialState,
    reducers: {
        toggleState: (state, action: PayloadAction<ToggleState>) => {
            state.open = action.payload.open
            if (action.payload?.category) state.category = action.payload.category
            state.id = action.payload.id
        },
    }
});

export const { toggleState } = toggleSlice.actions;
export default toggleSlice.reducer;