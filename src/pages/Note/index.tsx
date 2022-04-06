import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTheme } from 'styled-components';
import Loading from '../../components/Loading';
import { useAuth } from '../../hooks/useAuth';
import { useNotes } from '../../hooks/useNotes';
import {
    Container,
    Header,
    ContentContainer,
    Title,
    Label,
    Description,
    Content,
    BackButton,
    Username
} from './styles';

const Note: React.FC = () => {
    const { user } = useAuth();
    const { notes } = useNotes();
    const { id } = useParams() as unknown as NoteParams;
    const [note, setNote] = useState<Note>({} as Note);
    const [loading, setLoading] = useState(false);
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
        navigate(-1);
    };
    useEffect(() => {
        if (user === null) {
            return navigate("/");
        };
        fetchNote();
        console.log("note", note)
    }, [user, id]);

    return (
        <Container>
            {loading ?
                <Loading />
                :
                <>
                    <Header>
                        <Username> User: {user?.name} </Username>
                        <Title> Task: {note.title} </Title>
                        <BackButton onClick={handleGoBack}>
                            Go Back
                        </BackButton>
                    </Header>
                    <ContentContainer>
                        <Label>Description:</Label>
                        <Description> {note.description} </Description>
                        <Label>Activites:</Label>
                        <Content defaultValue={note.content} />
                    </ContentContainer>
                </>
            }
        </Container>
    );
};

export default Note;
