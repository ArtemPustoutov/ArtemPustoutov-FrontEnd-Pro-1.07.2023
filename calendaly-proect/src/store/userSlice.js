import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    username: '',
    email: '',
    password: '',
    token: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userSignUp: (state, action) => {
            const {username, email, password} = action.payload;
            state.username = username;
            state.email = email;
            state.password = password
            state.token =`${username}${password}`
            localStorage.setItem(state.email, JSON.stringify(state))

        },
        userSignIn: (state, action) => {
            const userInBase = action.payload
            state.email = userInBase.email
        },
    }
},
)

export const {userSignUp, userSignIn} = userSlice.actions;

export default userSlice.reducer;