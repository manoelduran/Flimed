import React, { ReactNode, useState, useEffect, useContext } from "react";

interface NotesProviderProps {
    children: ReactNode;
};

interface NotesContextData {
    notes: Note[] | null;
    isModalVisible: boolean;
    fetchNotes: () => Promise<void>;
    handleOpenModal: () => void;
    handleCloseModal: () => void;
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
    function handleOpenModal() {
        setIsModalVisible(true);
    };

    function handleCloseModal() {
        setIsModalVisible(false);
    };
    return (
        <NotesContext.Provider value={{ notes, fetchNotes, handleCloseModal, handleOpenModal, isModalVisible }}>
            {children}
        </NotesContext.Provider>
    );
};

const useNotes = () => {
    const context = useContext(NotesContext);
    return context;
};

export { NotesProvider, useNotes };