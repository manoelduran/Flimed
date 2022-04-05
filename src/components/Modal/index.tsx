import { FormEvent, useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useNotes } from '../../hooks/useNotes';
import theme from '../../styles/theme';
import Loading from '../Loading';

import {
    Container,
    Header,
    Title,
    Button,
    ContentTextArea,
    DescriptionInput,
    Form,
    FormButton,
    TitleInput
} from './styles';

export function Modal() {
    const { handleCloseModal } = useNotes();
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');
    async function onSubmit(event: FormEvent) {
        event.preventDefault();
        setLoading(true);
        try {
            // const user = await fetchCurrentUser(username, password);
            // if (!user) {
            //     throw new Error("Usuário não encontrado");
            // };
            // navigate('Dashboard');
        } catch (error: any) {
            if (error) {
                console.log(error.message as string)
            }
        } finally {
            setLoading(false);
        }
    };
    return (
        <Container>
            <Header>
                <div />
                <Title>Add </Title>
                <Button onClick={handleCloseModal} >
                    <AiOutlineClose style={{ color: theme.white_details }} />
                </Button>
            </Header>
            <Form onSubmit={onSubmit}>
                <TitleInput
                    type='text'
                    placeholder="Title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <DescriptionInput
                    type='text'
                    placeholder="Description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
                <ContentTextArea
                    placeholder="Content"
                    value={content}
                    onChange={(event) => setContent(event.target.value)}
                />
                <FormButton type="submit">
                    {loading
                        ?
                        <Loading />
                        :
                        "Create"
                    }
                </FormButton>
            </Form>
        </Container>
    );
}