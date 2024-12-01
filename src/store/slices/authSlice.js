import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from '../services/authService';


const initialState = {
    user: null,
    status: 'idle',
    error: null,
};

export const login = createAsyncThunk('auth/login', async (userData) => {
    const users = await authService.login(userData);
    return users;
});

export const register = createAsyncThunk('auth/register', async (userData) => {
    const newUser = await authService.register(userData);
    return newUser;
});

export const logout = createAsyncThunk('auth/logout', async () => {
    const updatedUser = await authService.logout();
    return updatedUser;
});

export const fetchUser = createAsyncThunk('auth/user', async () => {
    const user = await authService.getUser();
    return user;
});

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })

            .addCase(logout.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(logout.fulfilled, (state) => {
                state.status = 'succeeded';
                state.user = null; 
            })
            .addCase(logout.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })

            .addCase(register.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload;
            })
            .addCase(register.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })

            .addCase(fetchUser.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload;
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default authSlice.reducer;