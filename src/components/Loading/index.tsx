import React from 'react';
import {TailSpin} from "react-loader-spinner";
import { useTheme } from "styled-components";
import {
  Container
} from "./styles";
const Loading: React.FC = () => {
  const theme = useTheme();
  return (
    <Container>
      <TailSpin color={theme.white_details} height={30} width={30} />
    </Container>
  );
};

export default Loading;