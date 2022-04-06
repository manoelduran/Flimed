import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
    Container,
    ContentContainer,
    Title,
    Description,
    Content,
    BackButton,
    Username
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
        setLoading(true);
        try {
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
        console.log("note", note)
    }, [user, id])
    return (
        <Container>
            {loading ?
                <Loading />
                :
                <ContentContainer>
                    <BackButton onClick={handleGoBack}>
                        Back
                    </BackButton>
                    <Username> {user?.name} </Username>
                    <Title> {note.title} </Title>
                    <Description> Description: {note.description} </Description>
                    <Content> Activities:  {note.content} </Content>
                </ContentContainer>
            }
        </Container>
    );
};

export default Note;
