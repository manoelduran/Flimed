import React, { useEffect, useState } from 'react';
import NoteCard from '../../components/MovieCard';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';
import { useTheme } from 'styled-components';
import { useAuth } from '../../hooks/useAuth';
import { useNotes } from '../../hooks/useNotes';
import {
    Container,
    Title,
    Content,
    CreateButton,
    ContentContainer
} from './styles';
import { Modal } from '../../components/Modal';


const Home: React.FC = () => {
    const { user } = useAuth();
    const { notes, fetchNotes, isModalVisible, handleOpenModal } = useNotes();
    const theme = useTheme();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const handleSelectedNote = (note: Note) => {
        navigate(`/${String(note.id)}`);
    };
    const getNotes = async () => {
        setLoading(true);
        try {
            await fetchNotes();
        } catch (error: any) {
            console.log(error.message as string);
        }
        finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        // if (user === null) {
        //     return navigate("/");
        // };
        getNotes();
    }, [user, notes])
    return (
        <Container>
            <Title>TODO APP</Title>
            <CreateButton onClick={handleOpenModal}>Create new task </CreateButton>
            {isModalVisible ? <Modal /> : <ContentContainer>
                <NoteCard

                />
                <NoteCard

                />
                <NoteCard

                />
                <NoteCard

                />
                <NoteCard

                />

                {/* {loading ? <Loading /> :
                    <Content>
                        {notes?.map((note: Note) => (
                            <NoteCard
                                data={note}
                                key={note.id}
                                onClick={() => handleSelectedNote(note)}
                            />
                        ))}
                    </Content>
                } */}
            </ContentContainer>}
        </Container>
    );
};

export default Home;