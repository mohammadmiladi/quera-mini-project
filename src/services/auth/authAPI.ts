import axiosClient from "../../api/axiosClient";
import { AuthResponse, LoginPayload } from "./authTypes";


export const loginAPI = async (data: LoginPayload): Promise<AuthResponse> => {
    const response = await axiosClient.post('/auth', data)
    return response.data
}