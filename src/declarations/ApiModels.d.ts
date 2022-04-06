interface Note {
    id?: string;
    title: string;
    description: string;
    content: string;
};

interface NoteParams {
    id: string;
};
interface User {
    id: string;
    name: string;
    email: string;
    insertedAt: string;
    password: string;
};
