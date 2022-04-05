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

const MovieCard = () => {
  return (
    <Container>
      <Details>
        <Title>Mercado</Title>
        <Description> Lista de Compras:</Description>
        <Content>
          1. Ovo <br />
          2. Leite  <br />
          3. Pão <br />
          4. Queijo <br />
          5. Presunto<br />
        </Content>
        <ButtonsContainer>
          <DeleteButton>Delete</DeleteButton>
          <UpdateButton>Update</UpdateButton>
        </ButtonsContainer>
      </Details>
    </Container>
  );
};

export default MovieCard;