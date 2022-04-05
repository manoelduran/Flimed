import React, { useEffect } from 'react';
import { useNotes } from '../../hooks/useNotes';
import Modal from '../Modal';
import {
  Container,
  Title,
  Details,
  Description,
  Content,
  ButtonsContainer,
  DeleteButton,
  UpdateButton,
} from './styles';

interface NoteCardProps {
  data: Note;
  onClick: () => void;
};

const NoteCard = ({ data, onClick }: NoteCardProps) => {
  const { deleteNote, updateNote, isModalVisible } = useNotes();
  return (
    <Container>
      {isModalVisible ? <Modal data={data}/>
        :
     <>
     <Details onClick={onClick}>
     <Title>{data.title}</Title>
     <Description> {data.description}</Description>
     <Content
     defaultValue={data.content}
       disabled
     >
  
     </Content>
   </Details>
   <ButtonsContainer>
     <DeleteButton
       onClick={() => deleteNote(data)}
     >Delete</DeleteButton>
     <UpdateButton
       onClick={() => updateNote(data)}
     >Update</UpdateButton>
   </ButtonsContainer></>
      }
    </Container>
  );
};

export default NoteCard;