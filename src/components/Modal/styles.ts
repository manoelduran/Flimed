import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh ;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: absolute;
background: ${({ theme }) => theme.black};
`;
export const Header = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
position: static;
`;
export const TitleDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
position: static;
width: 202px;
height: 24px;
`;
export const Icon = styled.img`
width: 24px;
height: 24px;
background: ${({ theme }) => theme.white_details};
`;
export const Title = styled.h1`
margin-left: 8px;
font-family: Ubuntu;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 16px;
display: flex;
align-items: center;
text-align: center;
color: ${({ theme }) => theme.black};
`;
export const Button = styled.button`
width: 12px;
height: 12px;
border: none;
cursor: pointer;
background: ${({ theme }) => theme.background};
`;

