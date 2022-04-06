import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.div`
width: 100% ;
height: 100vh ;
padding: 20px ;
background-color: ${({ theme }) => theme.background} ;
display: flex;
flex-direction: column ;
align-items: center ;
`;
export const Header = styled.div`
width: 100%;
height: 50px ;
display: flex;
align-items: center;
justify-content: space-between;
`;
export const ContentContainer = styled.div`
width: 100%;
margin-top: 30px ;
display: flex;
flex-direction: column ;
align-items: flex-start ;
`;
export const Username = styled.h1`
font-size: 2rem;
color: ${({ theme }) => theme.green};
`;
export const BackButton = styled.button`
border: none;
height: 50px;
width: 200px ;
background: ${({ theme }) => theme.red_button};
color: ${({ theme }) => theme.white_details};
border-radius: 8px ;
cursor: pointer;
transition: 0.5s;
&:hover{
    background: ${({ theme }) => darken(0.05, theme.red_button)};
};
`;
export const Title = styled.h1`
font-size: 2rem;
`;
export const Description = styled.p`
font-size: 1.5rem;
margin-top: 2rem;
`;
export const Label = styled.label`
font-size: 2rem;
margin-top: 2rem;
`;
export const Content = styled.textarea`
margin-top: 2rem;
padding: 1rem;
width: 100% ;
font-size: 1.2rem;
color: ${({ theme }) => theme.black};
border: none;
outline: none;
resize: none;
border-radius: 8px ;
`;