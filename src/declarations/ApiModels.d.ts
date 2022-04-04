interface Note {
    id?: string;
    title: string;
    description: string;
    content: string;
};

interface NoteParams {
    title: string;
};
interface User {
    id: string;
    name: string;
    email: string;
    insertedAt: string;
    password: string;
}
interface UserRequest {
    message: string,
    user: {
        id: string,
        name: string,
        email: string,
        insertedAt: string
    },
    token: string;
};
