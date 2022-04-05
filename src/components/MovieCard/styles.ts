import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
padding: 10px 15px ;
border-radius: 8px ;
background: ${({ theme }) => theme.white_background};
`;
export const Details = styled.div`
display: flex;
flex-direction: column;
`;
export const Title = styled.h1`
width:100%;
font-size: 1.5rem;
color: ${({ theme }) => theme.black};
`;
export const Description = styled.p`
font-size: 1.2rem;
color: ${({ theme }) => theme.black};
`;
export const Content = styled.p`
margin-top: 10px ;
font-size: 1.2rem;
color: ${({ theme }) => theme.black};
`;
export const ButtonsContainer = styled.div`
margin-top: 10px ;
width: 100% ;
display: flex ;
align-items: center ;
justify-content: space-between ;
`;
export const DeleteButton = styled.button`
border: none;
border-radius: 8px ;
width: 100px;
height: 45px;
font-size: 16px;
line-height: 16px;
border: none;
outline: none ;
background: ${({ theme }) => theme.red_button};
color: ${({ theme }) => theme.white_details};
cursor: pointer;
transition: 0.5s;
&:hover{
    background: ${({ theme }) => darken(0.08, theme.red_button)};
};
`;
export const UpdateButton = styled.button`
margin-left: 5px ;
border-radius: 8px ;
border: none;
width: 100px;
height: 45px;
font-size: 16px;
line-height: 16px;
border: none;
outline: none ;
background: ${({ theme }) => theme.green};
color: ${({ theme }) => theme.white_details};
cursor: pointer;
transition: 0.5s;
&:hover{
    background: ${({ theme }) => darken(0.08, theme.green)};
};
`;



