import styled from "styled-components";


export const Container = styled.div`
width: 100% ;
height: 100vh ;
background-color: ${({ theme }) => theme.background} ;
display: flex;
flex-direction: column ;
align-items: center;
justify-content: center;
`;

export const ContentContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column ;
align-items: center;
justify-content: center;
`;
export const Username = styled.h1``;
export const BackButton = styled.button``;
export const Title = styled.h1``;
export const Description = styled.p``;
export const Content = styled.p``;