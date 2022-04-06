import React, { ReactNode, useState, useContext } from "react";

interface NotesProviderProps {
    children: ReactNode;
};

interface NotesContextData {
    notes: Note[];
    note: Note;
    isModalVisible: boolean;
    fetchNotes: () => Promise<void>;
    handleOpenModal: (data?: Note) => void;
    handleCloseModal: () => void;
    findNote: (data: Note) => Promise<void>;
    deleteNote: (data: Note) => Promise<void>;
}

export const NotesContext = React.createContext<NotesContextData>({} as NotesContextData);

const NotesProvider = ({ children }: NotesProviderProps) => {
    const [notes, setNotes] = useState<Note[]>(JSON.parse(localStorage.getItem('notes')!) ?? []);
    const [note, setNote] = useState<Note>({} as Note);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const fetchNotes = async () => {
        const notesCollection = await localStorage.getItem('notes');
        if (notesCollection) {
            const parsedNotes = await JSON.parse(notesCollection) as Note[];
            setNotes(parsedNotes);
        };
    };
    const findNote = async (data: Note) => {
        const findedNote = notes.find((note: Note) => note.id === data.id);
        console.log("UPDATE NOTE", findedNote);
        handleOpenModal(findedNote as Note);
    };
    const deleteNote = async (data: Note) => {
        const filteredNote = notes?.filter((note: Note) => note.id !== data.id);
        localStorage.setItem('notes', JSON.stringify(filteredNote));
        setNotes(filteredNote as Note[]);
    };
    function handleOpenModal(data?: Note) {
        if (data) {
            console.log("HANDLE OPEN MODAL", data);
            setNote(data);
        }
        setIsModalVisible(true);
    };

    function handleCloseModal(data?: Note) {
        if (data) {
            setNote({} as Note);
        };
        setIsModalVisible(false);
    };
    return (
        <NotesContext.Provider value={{
            notes,
            note,
            fetchNotes,
            deleteNote,
            findNote,
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