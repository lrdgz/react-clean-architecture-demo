import { createSlice } from '@reduxjs/toolkit';
import { User, UserEmptyState } from '@/models';

export const userSlice = createSlice({
    name: 'user',
    initialState: UserEmptyState,
    reducers: {
        createUser: (state, action) => {
            return action.payload;
        },
        modifyUse: (state, action) => {
            const formattedData = {... state, ...action.payload};
            return formattedData;
        },
        resetUser: () => {
            return UserEmptyState;
        }
    }
});

export const { createUser, modifyUse, resetUser } = userSlice.actions;
export default userSlice.reducer;