import React, { useState } from 'react';
import PropTypes from 'prop-types';
import isEmailValid from '../../utils/isEmailValid';
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
  const [errors, setErrors] = useState([]);

  function handleChangeName(e) {
    setName(e.target.value);

    if (!e.target.value) {
      setErrors((prevState) => [
        ...prevState,
        { field: 'name', message: 'Nome é obrigatório' },
      ]);
    } else {
      setErrors((prevState) => prevState.filter(
        (err) => err.field !== 'name',
      ));
    }
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);

    if (e.target.value && !isEmailValid(e.target.value)) {
      const errorAlreadyExists = errors.find((err) => err.field === 'email');

      if (errorAlreadyExists) {
        return;
      }

      setErrors((prevState) => [
        ...prevState,
        { field: 'email', message: 'E-mail inválido' },
      ]);
    } else {
      setErrors((prevState) => prevState.filter(
        (err) => err.field !== 'email',
      ));
    }
  }

  function getErrorMessageByFieldName(fieldName) {
    return errors.find((err) => err.field === fieldName)?.message;
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
      <FormGroup>
        <Input placeholder="Nome" />
      </FormGroup>
      <FormGroup>
        <Input placeholder="Email" />
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
