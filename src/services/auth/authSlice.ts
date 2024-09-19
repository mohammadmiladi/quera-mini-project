import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axiosClient from '../../api/axiosClient'
import { AuthState } from './authTypes'

const initialState: AuthState = {
    user: null,
    token: null,
    loading: false,
    error: null
}

export const login = createAsyncThunk(
    'auth/login',
    async () => {
        try {
            const response = axiosClient.get('/posts')
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