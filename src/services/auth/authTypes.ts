export interface LoginPayload {
    email: string;
    password: string;
}

export interface AuthResponse {
    user: {
        id: string;
        name: string;
        email: string;
    };
    token: string;
}


export interface AuthState {
    user: {
        id: string;
        name: string;
        email: string;
    } | null;
    token: string | null;
    error: string | null;
    loading: boolean;
}