import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
width: 100% ;
height: 100% ;
display: flex ;
flex-direction: column ;
align-items: center ;
justify-content: center ;
`;
export const Logo = styled.img`
width: 144px;
height: 144px;
`;
export const Title = styled.h1`
margin-top: 15px;
font-size: 24px;
line-height: 24px;
color: ${({ theme }) => theme.white_details};
`;
export const Form = styled.form`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
export const EmailInput = styled.input`
margin-top: 30px;
padding: 8px 16px;
border-radius: 4px;
border: none;
outline: none;
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
export const PasswordInput = styled.input`
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
background: ${({ theme }) => theme.green};
color: ${({ theme }) => theme.white_details};
cursor: pointer;
transition: 0.5s;
&:hover{
    background: ${({ theme }) => darken(0.05, theme.green)};
};
`;
