import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../toDo/toDoSlice'

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export default store;
