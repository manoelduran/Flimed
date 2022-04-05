import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh ;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: absolute;
background: ${({ theme }) => theme.background};
`;
export const Header = styled.div`
width: 302px;
display: flex;
align-items: center ;
justify-content: space-between ;
`;
export const Title = styled.h1`
color: ${({ theme }) => theme.white_details};
`;
export const Button = styled.button`
width: 12px;
height: 12px;
border: none;
cursor: pointer;
background: none ;
`;
export const Form = styled.form`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
export const TitleInput = styled.input`
margin-top: 25px;
padding: 8px 16px;
border: none;
outline: none;
border-radius: 4px;
background: ${({ theme }) => theme.white_details};
width: 302px;
height: 45px;
&:hover{
    border: 1px solid ${({ theme }) => theme.green};
};
&:focus{
   outline: 1px solid ${({ theme }) => theme.green};
};
`;
export const DescriptionInput = styled.input`
margin-top: 25px;
padding: 8px 16px;
border: none;
outline: none;
border-radius: 4px;
background: ${({ theme }) => theme.white_details};
width: 302px;
height: 45px;
&:hover{
    border: 1px solid ${({ theme }) => theme.green};
};
&:focus{
   outline: 1px solid ${({ theme }) => theme.green};
};
`;
export const ContentTextArea = styled.textarea`
margin-top: 25px;
padding: 8px 16px;
border: none;
outline: none;
border-radius: 4px;
background: ${({ theme }) => theme.white_details};
width: 302px;
height: 45px;
&:hover{
    border: 1px solid ${({ theme }) => theme.green};
};
&:focus{
   outline: 1px solid ${({ theme }) => theme.green};
};
`;
export const FormButton = styled.button`
margin-top: 30px;
border: none;
width: 302px;
height: 45px;
font-size: 16px;
line-height: 16px;
border-radius: 8px;
background: ${({ theme }) => theme.green};
color: ${({ theme }) => theme.white_details};
cursor: pointer;
transition: 0.5s;
&:hover{
    background: ${({ theme }) => darken(0.05, theme.green)};
};
`;

