import { configureStore, } from "@reduxjs/toolkit";
import { combineReducers } from '@reduxjs/toolkit';
import user from './userSlice'
import meetings from './meetingSlice'


const store = configureStore({
    reducer: combineReducers({
          user,
          meetings,
      })
  });
export default store