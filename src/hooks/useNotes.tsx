import React, { ReactNode, useState, useContext } from "react";

interface NotesProviderProps {
    children: ReactNode;
};

interface NotesContextData {
    notes: Note[] | null;
    isModalVisible: boolean;
    fetchNotes: () => Promise<void>;
    handleOpenModal: (data?: Note) => void;
    handleCloseModal: () => void;
    createNote: () => Promise<void>;
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
    const createNote = async () => {
        const notesCollection = await localStorage.getItem('notes');
        if (notesCollection) {
            const parsedNotes = await JSON.parse(notesCollection) as Note[];
            setNotes(parsedNotes);
        };
    };
    const updateNote = async (data: Note) => {
        handleOpenModal(data);
    };
    const deleteNote = async (data: Note) => {
        const filteredNote = notes.filter((note: Note) => note.id !== data.id);
        localStorage.setItem('notes', JSON.stringify(filteredNote));
        setNotes(filteredNote);
    };
    function handleOpenModal(data?: Note) {
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