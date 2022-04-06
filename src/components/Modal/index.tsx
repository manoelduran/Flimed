import { FormEvent, useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useNotes } from '../../hooks/useNotes';
import theme from '../../styles/theme';
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

const Modal = () => {
    const { handleCloseModal, notes, note } = useNotes();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [content, setContent] = useState("");
    const onSubmit = async (event: FormEvent) => {
        event.preventDefault();
        if (title === "" || description === "" || content === "") {
            alert("Title , Description and Content are required!");
            return;
        };
        notes.push({
            id: String(new Date()),
            title,
            description,
            content,
        });
        await localStorage.setItem('notes', JSON.stringify(notes));
        handleCloseModal();
    };
    const update = async (event: FormEvent) => {
        event.preventDefault();
        if (title === "" || description === "" || content === "") {
            alert("Title , Description and Content are required!");
            return;
        };
        const updatedNotes = notes.filter((updatedNote: Note) => updatedNote.id !== note.id);
        updatedNotes.push({
            id: note.id,
            title,
            description,
            content,
        });
        await localStorage.setItem('notes', JSON.stringify(updatedNotes));
        handleCloseModal();
        window.location.reload();
    };
    useEffect(() => {
        if (note.id) {
            setTitle(note.title);
            setDescription(note.description);
            setContent(note.content);
        };
    }, [note])
    return (
        <Container>
            <Header>
                <div />
                <Title>{note.id ? "Edit Task" : "Add Task"}</Title>
                <Button onClick={handleCloseModal} >
                    <AiOutlineClose style={{ color: theme.white_details }} />
                </Button>
            </Header>
            <Form>
                <TitleInput
                    type='text'
                    placeholder="Title"
                    required
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <DescriptionInput
                    type='text'
                    placeholder="Description"
                    required
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
                <ContentTextArea
                    placeholder="Content"
                    required
                    value={content}
                    onChange={(event) => setContent(event.target.value)}
                />
                <FormButton type="submit" onClick={note.id ? update : onSubmit}>
                    {
                        note.id ? "Edit" : "Create"
                    }
                </FormButton>
            </Form>
        </Container>
    );
};

export default Modal;