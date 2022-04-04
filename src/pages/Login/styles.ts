import styled from 'styled-components';
import {darken} from 'polished';

export const Container = styled.div`
width: 100% ;
height: 100% ;
display: flex ;
flex-direction: column ;
align-items: center ;
justify-content: center ;
`;

export const Logo = styled.img`
position: static;
width: 144px;
height: 144px;

`;
export const Title = styled.h1`
margin-top: 30px;
position: static;
width: 281px;
height: 24px;
left: 10.5px;
top: 159px;
font-family: Ubuntu;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 24px;
color: ${({ theme }) => theme.black};
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
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 16px;
border-radius: 4px;
border: none;
outline: none;
background: ${({ theme }) => theme.white_details}  url("/email.png") no-repeat 97% 50%;
position: static;
width: 302px;
height: 45px;
left: 0px;
top: 0px;
&:hover{
    border: 1px solid ${({ theme }) => theme.purple};
};
&:focus{
   outline: 1px solid ${({ theme }) => theme.purple};
};
`;
export const PasswordInput = styled.input`
margin-top: 25px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 16px;
border: none;
outline: none;
border-radius: 4px;
background: ${({ theme }) => theme.white_details}  url("/lock.png") no-repeat 97% 50%;
position: static;
width: 302px;
height: 45px;
left: 0px;
top: 69px;
&:hover{
    border: 1px solid ${({ theme }) => theme.purple};
};
&:focus{
   outline: 1px solid ${({ theme }) => theme.purple};
};
`;
export const FormButton = styled.button`
margin-top: 30px;
position: static;
border: none;
width: 302px;
height: 45px;
left: 0px;
top: 0px;
font-family: Ubuntu;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 16px;
background: ${({ theme }) => theme.purple};
color: ${({ theme }) => theme.white_details};
cursor: pointer;
transition: 0.5s;
&:hover{
    background: ${({ theme }) => darken(0.05, theme.purple)};
};
`;
