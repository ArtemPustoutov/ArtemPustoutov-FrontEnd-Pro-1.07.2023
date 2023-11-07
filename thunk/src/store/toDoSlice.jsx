import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
    count: 0,
    todos: [],
    todo:[]
};

export const fetchTodo = createAsyncThunk(
    'todo/fetchTodo',
    async function (_, {rejectWithValue}) {
        try {
        const response = await fetch('https://653e66479e8bd3be29df401a.mockapi.io/api1/todo')
        if (response.ok === false) {
            console.log(response)
            throw new Error('Server Error');
        }
            const data =  await response.json()
            return data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
);

const todoSlice = createSlice ({
    name: "todo",
    initialState,
    status: null,
    error: null,
    reducers: {
        addTodo: (state, action) => {
            const todo= {
                id: Math.random() * 100,
                text: action.payload,
            }
            state.todos.push(todo);
            state.count += 1;
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
            state.count -= 1;
        }
    },
    extraReducers: {
        [fetchTodo.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchTodo.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.todos = action.payload
        },
        [fetchTodo.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload
        }
    }
})


export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;