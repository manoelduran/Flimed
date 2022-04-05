import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column ;
align-items: center;
justify-content: center ;
`;

export const Title = styled.h1`
padding-bottom: 30px;
align-items: center;
`;
export const CreateButton = styled.button`
margin-right: 30px ;
align-self: flex-end ;
border: none;
outline: none ;
padding: 20px 20px ;
border-radius: 8px ;
font-size: 16px;
line-height: 16px;
background: ${({ theme }) => theme.green};
color: ${({ theme }) => theme.white_details};
cursor: pointer;
transition: 0.5s;
&:hover{
    background: ${({ theme }) => darken(0.05, theme.green)};
};
`;
export const ContentContainer = styled.div`
width: 100% ;
padding: 35px  15px;
display: flex;
align-items: center;
`;
export const Content = styled.div`
width: 100% ;
display: flex;
flex-wrap: wrap ;
align-items: center ;
justify-content: flex-start;
 `;