import { createSlice } from '@reduxjs/toolkit';
import { local_token } from '../common/constatnts';

export const initialState = {
    token: null,
    users: [],
    user: {},
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userSignUp: (state, action) => {
            const newUser = action.payload;
            state.users = [...state.users, newUser]
            localStorage.setItem(local_token.USERS, JSON.stringify(state.users))
            state.token = localStorage.setItem(local_token.TOKEN, JSON.stringify(action.payload))
        },
        userSignIn: (state, action) => {
            const userInBase = action.payload
            state.token = localStorage.setItem(local_token.TOKEN, JSON.stringify(userInBase))
        },
        userList: (state) => {
            const memoryUsers = localStorage.getItem(local_token.USERS);
            state.users = memoryUsers ? JSON.parse(memoryUsers) : [];
        },
        userToken: (state) => {
            state.token = localStorage.getItem(local_token.TOKEN);
        },
        userState: (state) => {
            const tokenState  = localStorage.getItem(local_token.TOKEN);
            state.user = JSON.parse(tokenState);
        },
        logOutUser: (state) => {
            state.user = {}
            state.token = null
            localStorage.removeItem(local_token.TOKEN)
        }
    }
},
)

export const {userSignUp, userSignIn, userList, userToken, userState, logOutUser} = userSlice.actions;

export default userSlice.reducer;