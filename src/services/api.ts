import axios from 'axios';

export const client = axios.create({
    baseURL: "https://test-flimed-backend.herokuapp.com",
});

export async function login(email: string, password: string): Promise<UserRequest | null> {
    const result = await client.post(`/users/auth/`, {
        email, password
    }) as UserRequest;
    if (result.message.includes("User or password are invalid")) {
        console.log(result.message);
        return null;
    }
    console.log(result)
    return result;
};


