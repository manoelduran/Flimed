/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useNotes } from '../../hooks/useNotes';
import Loading from '../Loading';

import {
    Container,
    Header,
    TitleDiv,
    Title,
    Button,
} from './styles';

export function Modal() {
    const { handleCloseModal } = useNotes();
    const [loading, setLoading] = useState(false);
    return (
        <Container>
            <Header>
                <TitleDiv>
                    <Title>Repasses da</Title>
                </TitleDiv>
                <Button onClick={handleCloseModal}>
                    <AiOutlineClose />
                </Button>
            </Header>
        </Container>
    );
}