import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';
import Modal from '../../components/Modal';
import NoteCard from '../../components/NoteCard';
import { useAuth } from '../../hooks/useAuth';
import { useNotes } from '../../hooks/useNotes';
import {
    Container,
    Title,
    Content,
    CreateButton,
    ContentContainer
} from './styles';



const Home: React.FC = () => {
    const { user } = useAuth();
    const { fetchNotes, isModalVisible, handleOpenModal, notes, deleteNote, updateNote } = useNotes();
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
        if (user === null) {
            return navigate("/");
        };
        getNotes();
    }, [user])
    return (
        <Container>
            <Title>TODO APP {user?.name}</Title>
            <CreateButton onClick={() => handleOpenModal()}>Create new task </CreateButton>
            {isModalVisible ? <Modal />
                :
                <ContentContainer>
                    {loading ? <Loading />
                        :
                        <Content>
                            {notes?.map((note: Note, key) => (
                                <NoteCard
                                    data={note}
                                    key={key}
                                    onClick={() => handleSelectedNote(note)}
                                    handleEdit={() => updateNote(note)}
                                    handleDelete={() => deleteNote(note)}
                                />
                            ))}
                        </Content>
                    }
                </ContentContainer>}
        </Container>
    );
};

export default Home;