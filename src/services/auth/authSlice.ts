import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { loginAPI } from './authAPI'
import { AuthState, LoginPayload } from './authTypes'

const initialState: AuthState = {
    user: null,
    token: null,
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
            state.token = null;

            // localStorage.removeItem('token')

            localStorage.clear();
        }
    }
})


export default authSlice.reducer