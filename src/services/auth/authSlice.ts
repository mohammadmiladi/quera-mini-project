import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { loginAPI, registerAPI } from './authAPI'
import { AuthState, LoginPayload, RegisterPayload } from './authTypes'

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
export const register = createAsyncThunk(
    'auth/register',
    async (registerPayload: RegisterPayload) => {
        try {
            const response = await registerAPI(registerPayload)
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
            localStorage.removeItem('token');
            // localStorage.clear();
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
        builder.addCase(register.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(register.fulfilled, (state, action) => {
            state.loading = false;
            state.token = action.payload?.token;
            localStorage.setItem('token', action.payload?.token || "");
        });
        builder.addCase(register.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });
    }
})

export const { logout, setToken } = authSlice.actions;
export default authSlice.reducer