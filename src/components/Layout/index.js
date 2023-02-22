import React from 'react';

import Header from '../Header';
import Routes from '../../routes';
import { Container } from './styles';

export default function Layout() {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <Routes />
    </>
  );
}
