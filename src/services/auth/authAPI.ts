import axiosClient from "../../api/axiosClient";
import { AuthResponse, LoginPayload, RegisterPayload } from "./authTypes";


export const loginAPI = async (data: LoginPayload): Promise<AuthResponse> => {
    const response = await axiosClient.post('/api/login', data)
    return response.data
}

export const registerAPI = async (data: RegisterPayload): Promise<AuthResponse> => {
    const response = await axiosClient.post('/api/register', data)
    return response.data
}
