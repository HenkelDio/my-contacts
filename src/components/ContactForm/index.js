import React, { useState } from 'react';
import PropTypes from 'prop-types';
import isEmailValid from '../../utils/isEmailValid';
import useErrors from '../../hooks/useErrors';
import FormGroup from '../FormGroup';

import { Form, ButtonContainer } from './styles';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

export default function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [category, setCategory] = useState('');

  const { setError, removeError, getErrorMessageByFieldName } = useErrors();

  function handleChangeName(e) {
    setName(e.target.value);

    if (!e.target.value) {
      setError({ field: 'name', message: 'Nome é obrigatório' });
    } else {
      removeError('name');
    }
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);

    if (e.target.value && !isEmailValid(e.target.value)) {
      setError({ field: 'email', message: 'E-mail inválido' });
    } else {
      removeError('email');
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(
      {
        name, email, number, category,
      },
    );
  };

  return (
    <Form>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          error={getErrorMessageByFieldName('name')}
          placeholder="Nome"
          value={name}
          onChange={(e) => handleChangeName(e)}
        />
      </FormGroup>
      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          error={getErrorMessageByFieldName('email')}
          placeholder="Email"
          value={email}
          onChange={(e) => handleChangeEmail(e)}
        />
      </FormGroup>
      <FormGroup>
        <Input
          placeholder="Telefone"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Select onChange={(e) => setCategory(e.target.value)}>
          <option disabled selected value="">Selecione a categoria</option>
          <option value="instagram">Instagram</option>
          <option value="discord">Discord</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit">
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
