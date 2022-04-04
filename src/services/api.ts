import axios from 'axios';

export const client = axios.create({
    baseURL: "https://test-flimed-backend.herokuapp.com",
});

export async function login(email: string, password: string): Promise<User | null> {
    const data = JSON.stringify({ email, password });
    const result = await client.post(`/users/auth/${data}`)
    if (result.data.response?.includes("Inválido")) {
        return null;
    }
    return result.data;
};


