import React from 'react';
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

const MovieCard = ({ data, onClick }: NoteCardProps) => {
  return (
    <Container>
      <Details onClick={onClick}>
        <Title>{data.title}</Title>
        <Description> {data.description}</Description>
        <Content
          disabled
        >
          {data.content}
        </Content>
      </Details>
      <ButtonsContainer>
        <DeleteButton>Delete</DeleteButton>
        <UpdateButton>Update</UpdateButton>
      </ButtonsContainer>
    </Container>
  );
};

export default MovieCard;