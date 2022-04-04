import React, { ReactNode, useState, useEffect, useContext } from "react";
import { useAuth } from "./useAuth";

interface NotesProviderProps {
    children: ReactNode;
};

interface NotesContextData {
    notes: Note[] | null;
    fetchNotes: () => Promise<void>;
}

export const NotesContext = React.createContext<NotesContextData>({} as NotesContextData);

const NotesProvider = ({ children }: NotesProviderProps) => {
    const { user } = useAuth();
    const [notes, setNotes] = useState<Note[]>(JSON.parse(localStorage.getItem('notes')!) ?? null);
    const fetchNotes = async () => {
        const notesCollection = await localStorage.getItem('notes');
        if (notesCollection) {
            const parsedNotes = await JSON.parse(notesCollection) as Note[];
            setNotes(parsedNotes);
        };
    };
    return (
        <NotesContext.Provider value={{ notes, fetchNotes }}>
            {children}
        </NotesContext.Provider>
    );
};

const useNotes = () => {
    const context = useContext(NotesContext);
    return context;
};

export { NotesProvider, useNotes };