import { createSlice } from '@reduxjs/toolkit';

const drawerSlice = createSlice({
    name: 'drawer',
    initialState: {
        value: false,
    },
    reducers: {
        setDrawer: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setDrawer } = drawerSlice.actions;
export default drawerSlice.reducer;
