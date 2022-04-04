import React from 'react';
import {
  Container,
  Title,
  ButtonCard,
  Details,
  Description,
  DescriptionContainer,
} from './styles';

interface NoteCardProps {
  data: Note;
  onClick: () => void;
};

const MovieCard = ({ data, onClick }: NoteCardProps) => {
  return (
    <Container >
      <ButtonCard onClick={onClick}>
        <Details>
          <DescriptionContainer>
            <Description>{data.description} </Description>
          </DescriptionContainer>
          <Title>{data.title}</Title>
        </Details>
      </ButtonCard>
    </Container>
  );
};

export default MovieCard;