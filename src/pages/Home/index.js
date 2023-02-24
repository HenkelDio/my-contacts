import React from 'react';
import { Link } from 'react-router-dom';

import arrow from '../../assets/icons/arrow.svg';
import edit from '../../assets/icons/edit.svg';
import trash from '../../assets/icons/trash.svg';
import Loader from '../../components/Loader';
import Modal from '../../components/Modal';
import {
  Container, InputSearch, Header, ListContainer, Card,
} from './styles';

export default function ContactsList() {
  return (
    <Container>

      <InputSearch>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSearch>

      <Header>
        <strong>3 contatos</strong>
        <Link to="new">Novo contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="arrow" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Mateus Silva</strong>
              <small>instagram</small>
            </div>
            <span>mateus@mail.com</span>
            <span>(41) 99809-3673</span>
          </div>
          <div className="actions">
            <Link to="/edit/123">
              <img src={edit} alt="edit" />
            </Link>
            <button type="button">
              <img src={trash} alt="delete" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
