import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: { user: false },
    reducers: {
        toggleState: (state) => {
            return { user: !state.user };
        }
    }
});

export const { toggleState } = userSlice.actions;
export default userSlice.reducer;
