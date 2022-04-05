import React, { useEffect, useState } from 'react';
import NoteCard from '../../components/MovieCard';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';
import { useAuth } from '../../hooks/useAuth';
import { useNotes } from '../../hooks/useNotes';
import {
    Container,
    Title,
    Content,
    CreateButton,
    ContentContainer
} from './styles';
import Modal from '../../components/Modal';


const Home: React.FC = () => {
    const { user } = useAuth();
    const { fetchNotes, isModalVisible, handleOpenModal } = useNotes();

    const notes: Note[] = [
        {
            id: String(new Date()),
            title: "Mercado",
            description: "Lista de Compras",
            content: "1. Ovo 2. Leite 3. Pão 4. Queijo 5. Presunto"
        },
    ]
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
            <Title>TODO APP</Title>
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
                                />
                            ))}
                        </Content>
                    }
                </ContentContainer>}
        </Container>
    );
};

export default Home;