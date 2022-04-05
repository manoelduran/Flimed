import React, { ReactNode, useState, useContext } from "react";

interface NotesProviderProps {
    children: ReactNode;
};

interface NotesContextData {
    notes: Note[] | null;
    isModalVisible: boolean;
    fetchNotes: () => Promise<void>;
    handleOpenModal: (id?: string) => void;
    handleCloseModal: () => void;
    createNote: (title: string, description: string, content: string) => Promise<void>;
    updateNote: (data: Note) => Promise<void>;
    deleteNote: (data: Note) => Promise<void>;
}

export const NotesContext = React.createContext<NotesContextData>({} as NotesContextData);

const NotesProvider = ({ children }: NotesProviderProps) => {
    const [notes, setNotes] = useState<Note[]>(JSON.parse(localStorage.getItem('notes')!) ?? null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const fetchNotes = async () => {
        const notesCollection = await localStorage.getItem('notes');
        if (notesCollection) {
            const parsedNotes = await JSON.parse(notesCollection) as Note[];
            setNotes(parsedNotes);
        };
    };
    const createNote = async (title: string, description: string, content: string) => {
        const currentNote = {
            id: String(new Date()),
            title,
            description,
            content
        } as Note;
        await localStorage.setItem('notes', JSON.stringify(currentNote));
    };
    const updateNote = async (data: Note) => {
        handleOpenModal(String(data.id));
    };
    const deleteNote = async (data: Note) => {
        const filteredNote = notes.filter((note: Note) => note.id !== data.id);
        localStorage.setItem('notes', JSON.stringify(filteredNote));
        setNotes(filteredNote);
    };
    function handleOpenModal(id?: string) {
        setIsModalVisible(true);
    };

    function handleCloseModal() {
        setIsModalVisible(false);
    };
    return (
        <NotesContext.Provider value={{
            notes,
            fetchNotes,
            createNote,
            deleteNote,
            updateNote,
            handleCloseModal,
            handleOpenModal,
            isModalVisible
        }}>
            {children}
        </NotesContext.Provider>
    );
};

const useNotes = () => {
    const context = useContext(NotesContext);
    return context;
};

export { NotesProvider, useNotes };