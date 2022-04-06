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
  onClick: (data: Note) => void;
  handleEdit: (data: Note) => void;
  handleDelete: () => void;
};

const NoteCard = ({ data, onClick, handleEdit, handleDelete }: NoteCardProps) => {
  return (
    <Container>
      <Details onClick={() => onClick(data)}>
        <Title>{data.title}</Title>
        <Description> {data.description}</Description>
        <Content
          defaultValue={data.content}
          disabled
        />
      </Details>
      <ButtonsContainer>
        <DeleteButton
          onClick={handleDelete}
        >Delete</DeleteButton>
        <UpdateButton
          onClick={() => handleEdit(data)}
        >Update</UpdateButton>
      </ButtonsContainer>
    </Container>
  );
};

export default NoteCard;