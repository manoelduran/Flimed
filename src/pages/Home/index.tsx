import React, { useState } from 'react';
// import { NoteCard } from '../../components/MovieCard';
import { useNavigate } from 'react-router-dom';
// import { Loading } from '../../components/Loading';
import { useTheme } from 'styled-components';
import * as api from '../../services/api';
import {
    Container,
    Content,
    ContentContainer
} from './styles';


const Home: React.FC = () => {
    const theme = useTheme();
    const [notes, setNotes] = useState<Note[]>([] as Note[]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    async function fetchNotes() {
        try {
            setLoading(true);
            // const response = await api.searchMovies(search);
            // setNotes(response);
        } catch (err) {
            return console.log(err);
        } finally {
            setLoading(false);
        };
    };
    function handleSelectedNote(note: Note) {
        navigate(`/${String(note.id)}`);
    };
    return (
        <Container>
            <ContentContainer>
                <h1>ola</h1>
                {/* {loading ? <Loading /> :
                    <Content>
                        {notes.map((note: Note) => (
                            <NoteCard
                                data={note}
                                key={note.id}
                                onClick={() => handleSelectedNote(note)}
                            />
                        ))}
                    </Content>
                } */}
            </ContentContainer>
        </Container>
    );
};

export default Home;