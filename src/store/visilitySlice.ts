import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum VisibilityFilter {
    ShowAll = "SHOW_ALL",
    ShowDone = "SHOW_DONE",
    ShowActive = "SHOW_ACTIVE",
}

export const initialState = VisibilityFilter.ShowAll;

const visibilitySlice = createSlice({
    name: 'visibilityFilter',
    initialState,
    reducers: {
        setVisibilityFilter(state, action: PayloadAction<VisibilityFilter>) {
            return action.payload;
        }
    }
});

export const { setVisibilityFilter } = visibilitySlice.actions;

export default visibilitySlice.reducer;