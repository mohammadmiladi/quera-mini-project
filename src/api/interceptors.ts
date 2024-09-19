import { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from "axios"

const applyInterceptors = (axiosClient: AxiosInstance) => {
    axiosClient.interceptors.request.use(
        (config: InternalAxiosRequestConfig) => {
            // config.headers.Website_Mode = 'test'
            const token = localStorage.getItem('token');

            if (token) {
                config.headers.Authorization = `Bearer ${token}`
            }

            return config
        },
        (error) => {
            return Promise.reject(error)
        }
    )

    axiosClient.interceptors.response.use(
        (response: AxiosResponse) => {
            return response
        },
        (error) => {
            if (error.response?.status === 401) {
                console.log("مجاز نیستید");
            }

            // add 400, 500, 403 status codes

            return Promise.reject(error)
        }
    )
}

export default applyInterceptors