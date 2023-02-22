import React from 'react';
import logo from '../../assets/logo.svg';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="logo" width="201" />
    </Container>
  );
}
