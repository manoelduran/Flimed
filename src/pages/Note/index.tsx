import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
    Container,
    Content,
} from './styles';
import { useTheme } from 'styled-components';
import Loading from '../../components/Loading';
import { useAuth } from '../../hooks/useAuth';
import { useNotes } from '../../hooks/useNotes';

const Note: React.FC = () => {
    const { user } = useAuth();
    const { notes } = useNotes();
    const { id } = useParams() as unknown as NoteParams;
    const [note, setNote] = useState<Note>({} as Note);
    const [loading, setLoading] = useState(false);
    const theme = useTheme();
    const navigate = useNavigate();
    const fetchNote = async () => {
        try {
            setLoading(true);
            const findedNote = notes.find((note: Note) => String(note.id) === id);
            setNote(findedNote as Note);
        } catch (err) {
            return console.log(err);
        } finally {
            setLoading(false);
        };
    }
    function handleGoBack() {
        navigate(-1)
    }
    useEffect(() => {
        if (user === null) {
            return navigate("/");
        };
        fetchNote();
        console.log("note",note)
    }, [user, id])
    return (
        <Container>
            {loading ?
                <Loading />
                :
                <Content>
                    <h1>{note.title}</h1>
                    <h1>{note.description}</h1>
                    <h1>{note.content}</h1>
                </Content>
            }
        </Container>
    );
};

export default Note;
