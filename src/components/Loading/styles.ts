import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
height: 50vh;
margin-top: 2rem;
display: flex;
align-items: center;
justify-content: center;
`;

export const Text = styled.h1`
font-size: 2rem;
text-align: center;
color: ${({ theme }) => theme.white_details};
`;