import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';

import delay from '../../utils/delay';
import arrow from '../../assets/icons/arrow.svg';
import edit from '../../assets/icons/edit.svg';
import trash from '../../assets/icons/trash.svg';
import Loader from '../../components/Loader';
import Modal from '../../components/Modal';
import {
  Container, InputSearch, Header, ListHeader, Card,
} from './styles';

export default function ContactsList() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setLoading] = useState(true);

  const filteredContacts = useMemo(() => contacts.filter((contact) => (
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()))), [contacts, searchTerm]);

  useEffect(() => {
    async function loadContacts() {
      try {
        setLoading(true);

        const response = await fetch(
          `http://localhost:3001/contacts?orderBy=${orderBy}`,
        );
        await delay();

        const json = await response.json();
        setContacts(json);
      } catch (error) {
        console.log('error', error);
      } finally {
        setLoading(false);
      }
    }

    loadContacts();
  }, [orderBy]);

  function handleChangeSearchTerm(e) {
    setSearchTerm(e.target.value);
  }

  function handleToggleOrderBy() {
    setOrderBy(
      (prevState) => (prevState === 'asc'
        ? 'desc'
        : 'asc'),
    );
  }

  return (
    <Container>

      <Loader isLoading={isLoading} />

      <InputSearch>
        <input
          value={searchTerm}
          type="text"
          placeholder="Pesquisar contato..."
          onChange={handleChangeSearchTerm}
        />
      </InputSearch>

      <Header>
        <strong>
          {filteredContacts.length}
          {filteredContacts.length === 1 ? ' contatos' : ' contatos'}
        </strong>
        <Link to="new">Novo contato</Link>
      </Header>

      {
        filteredContacts.length > 0 && (
          <ListHeader orderBy={orderBy}>
            <header>
              <button
                onClick={handleToggleOrderBy}
                type="button"
              >
                <span>Nome</span>
                <img src={arrow} alt="arrow" />
              </button>
            </header>
          </ListHeader>
        )
      }

      {filteredContacts.map((contact) => (
        <Card key={contact.id}>
          <div className="info">
            <div className="contact-name">
              <strong>{contact.name}</strong>
              {
                  contact.category_name && (
                  <small>{contact.category_name}</small>)
}
            </div>
            <span>{contact.email}</span>
            <span>{contact.phone}</span>
          </div>
          <div className="actions">
            <Link to={`/edit/${contact.id}`}>
              <img src={edit} alt="edit" />
            </Link>
            <button type="button">
              <img src={trash} alt="delete" />
            </button>
          </div>
        </Card>
      ))}
    </Container>
  );
}
