import styled from 'styled-components';

export const Container = styled.div`
height: 200px ;
background: ${({ theme }) => theme.green};
`;
export const Details = styled.div`
display: flex;
flex-direction: column;
`;
export const Title = styled.h1`
width:100%;
font-size: 1.5rem;
color: ${({ theme }) => theme.white_details};
`;
export const Description = styled.p`
font-size: 1.2rem;
color: ${({ theme }) => theme.white_details};
`;

export const DeleteButton = styled.button``;
export const UpdateButton = styled.button``;



