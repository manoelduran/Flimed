import axios from 'axios';

export const client = axios.create({
    baseURL: "https://test-flimed-backend.herokuapp.com",
});

export async function login(email: string, password: string): Promise<UserRequest> {
    const result = await client.post(`/users/auth/`, {
        email, password
    }) as UserRequest;
    // if (result.data.response?.includes("Inválido")) {
    //     return null;
    // }
    console.log(result)
    return result;
};


