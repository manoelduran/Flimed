import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column ;
align-items: center;
`;

export const Title = styled.h1`
align-items: center;
`;
export const CreateButton = styled.button`
margin-right: 30px ;
align-self: flex-end ;
border: none;
outline: none ;
width: 200px;
border-radius: 8px ;
height: 45px;
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
padding: 50px  15px;
display: flex;
align-items: center;
justify-content: space-between;
`;
export const Content = styled.div`
 `;