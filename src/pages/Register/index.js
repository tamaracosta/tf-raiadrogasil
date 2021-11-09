import React from 'react';
import FormPropsTextFields from '../../components/input/input';
import { useState } from 'react';
import { Button } from '@mui/material';
import BasicModal from '../../components/modals/modals';
import { registerEmployee } from '../../services/firebase';

export default function Register() {
  const [values, setValues] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const register = () => {
    registerEmployee(values)
      // .then((data) => console.log(data))
      .then(() => setShowModal(true))
      .catch((error) => console.log(error));
    setShowModal(true);
  };

  return (
    <>
      <FormPropsTextFields
        id="name"
        name="name"
        label="Nome"
        className=""
        onChange={handleChange}
        type="text"
      />
      <FormPropsTextFields
        id="last-name"
        name="lastName"
        label="Sobrenome"
        className=""
        onChange={handleChange}
        type="text"
      />
      <FormPropsTextFields
        id="email"
        name="email"
        label="E-mail"
        className=""
        onChange={handleChange}
        type="email"
      />
      <FormPropsTextFields
        id="phone"
        name="phone"
        label="Telefone"
        className=""
        onChange={handleChange}
        type="text"
      />

      <Button onClick={() => register()}>Cadastrar</Button>
      <BasicModal showModal={showModal} setShowModal={setShowModal}>
        <p>Cadastrado com sucesso!</p>
      </BasicModal>
    </>
  );
}
