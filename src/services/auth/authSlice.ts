import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { loginAPI } from './authAPI'
import { AuthState, LoginPayload } from './authTypes'

const initialState: AuthState = {
    user: null,
    token: undefined,
    loading: false,
    error: null
}

export const login = createAsyncThunk(
    'auth/login',
    async (loginPayload: LoginPayload) => {
        try {
            const response = await loginAPI(loginPayload)
            return response
        } catch (error) {

        }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout(state) {
            state.user = null;
            state.token = undefined;
            // localStorage.removeItem('token')
            localStorage.clear();
        },
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.loading = false;
            state.token = action.payload?.token;
            localStorage.setItem('token', action.payload?.token || "");
        });
        builder.addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });
    }
})


export default authSlice.reducer