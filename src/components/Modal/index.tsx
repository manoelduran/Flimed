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
interface ModalProps {
    data?: Note;
}
const Modal = ({ data }: ModalProps) => {
    const { handleCloseModal, notes } = useNotes();
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');
    async function onSubmit(event: FormEvent) {
        event.preventDefault();
            notes.push({
                id: String(new Date()),
                title,
                description,
                content,
            });
            localStorage.setItem('notes', JSON.stringify(notes));
            handleCloseModal();
    };
    useEffect(() => {
        console.log(data?.id)
    }, [])
    return (
        <Container>
            <Header>
                <div />
                <Title>{data?.id ? "Edit Task" : "Add Task"}</Title>
                <Button onClick={handleCloseModal} >
                    <AiOutlineClose style={{ color: theme.white_details }} />
                </Button>
            </Header>
            <Form>
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
                <FormButton type="submit" onClick={onSubmit}>
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
};

export default Modal;