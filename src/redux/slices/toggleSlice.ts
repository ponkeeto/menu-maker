import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OpenType, ToggleState } from "@/lib/types";

const initialState: ToggleState = {
    open: 'close'
}

const toggleSlice = createSlice({
    name: 'toggle',
    initialState,
    reducers: {
        toggleState: (state, action: PayloadAction<OpenType>) => {
            state.open = action.payload
        },
    }
});

export const { toggleState } = toggleSlice.actions;
export default toggleSlice.reducer;