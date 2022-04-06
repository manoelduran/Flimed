import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };
  #root, body, html {
    height: 100%;
    width: 100%;
  };

  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.white_details};
  };

body , input , button , textarea {
  font: 400 16px Roboto, sans-serif;
};
h1, h2, h3, h4, h5, h6, span, p{
  font-weight: 400;
  font-family: Roboto, sans-serif;
  color: ${({theme}) => theme.white_details};
}
  button {
cursor: pointer;
  };
  a{
    text-decoration: none;
  };
`;
