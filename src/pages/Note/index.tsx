import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
    Container,
    Content,
} from './styles';
import { useTheme } from 'styled-components';
import Loading from '../../components/Loading';
import { useAuth } from '../../hooks/useAuth';

const Note: React.FC = () => {
    const { user } = useAuth();
    const { id } = useParams() as unknown as NoteParams;
    const [note, setNote] = useState<Note>({} as Note);
    const [loading, setLoading] = useState(false);
    const theme = useTheme();
    const navigate = useNavigate();
    async function fetchNote(title: string) {
        try {
            setLoading(true);
            // const result = await searchMovie(id);
            // setMovie(result);
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
    }, [user])
    return (
        <Container>
            {loading ?
                <Loading />
                :
                <Content>
                    <h1>ola</h1>
                </Content>
            }
        </Container>
    );
};

export default Note;
