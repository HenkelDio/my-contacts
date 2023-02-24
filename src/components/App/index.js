import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import { Container } from './styles';
import Global from '../../styles/Global';
import _default from '../../styles/themes/default';
import Layout from '../Layout';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={_default}>
        <Global />

        <Container>
          <Layout />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}
