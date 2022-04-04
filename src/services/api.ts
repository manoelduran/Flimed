import axios from 'axios';

export const api = axios.create({
    baseURL: "https://test-flimed-backend.herokuapp.com",
});


