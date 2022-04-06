import axios from 'axios';

export const client = axios.create({
    baseURL: "https://test-flimed-backend.herokuapp.com",
});

export async function login(email: string, password: string): Promise<User | null> {
    const result = await client.post(`/users/auth/`, {
        email, password
    });
    return result.data.user;
};


