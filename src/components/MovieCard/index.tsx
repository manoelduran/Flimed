import React from 'react';
import {
  Container,
  Title,
  Details,
  Description,
  DeleteButton,
  UpdateButton,
} from './styles';

interface NoteCardProps {
  data: Note;
  onClick: () => void;
};

const MovieCard = () => {
  return (
    <Container>
      <Details>
        <Title>Mercado</Title>
        <Description> Lista de Compras:</Description>
        <DeleteButton>Delete</DeleteButton>
        <UpdateButton>Update</UpdateButton>
      </Details>
    </Container>
  );
};

export default MovieCard;