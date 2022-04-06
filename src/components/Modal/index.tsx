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

const Modal = () => {
    const { handleCloseModal, notes, note } = useNotes();
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState(note ? note.title : "");
    const [description, setDescription] = useState(note ? note.description : "");
    const [content, setContent] = useState(note ? note.content : "");

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
        localStorage.setItem('notes', JSON.stringify(notes));
        setTitle("");
        setDescription("");
        setContent("");
        handleCloseModal();
    };
    useEffect(() => {
        console.log("DATA MODAL", note)
        console.log(" NOTE", note);
    }, [note])
    return (
        <Container>
            <Header>
                <div />
                <Title>{note.id ? "Edit Task" : "Add Task"}</Title>
                <Button onClick={() => handleCloseModal(note)} >
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
                        <>
                            {
                                note.id ? "Edit" : "Create"
                            }
                        </>
                    }
                </FormButton>
            </Form>
        </Container>
    );
};

export default Modal;