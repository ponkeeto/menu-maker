import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface titleState {
    title: string
}

const initialState: titleState = {
    title: 'Menu Maker'
}

const titleSlice = createSlice({
    name: 'title',
    initialState,
    reducers: {
        changeTitle: (state, action: PayloadAction<string>) => {
            state.title = action.payload
        },
    }
});

export const { changeTitle } = titleSlice.actions;
export default titleSlice.reducer;