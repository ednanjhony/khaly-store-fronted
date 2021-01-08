import React from 'react';
import {
  FiArrowLeft,
  FiMail,
  FiUser,
  FiLock,
  FiFileText,
  FiGift,
  FiSmartphone,
} from 'react-icons/fi';

import { Form } from '@unform/web';

import logoImg from '../../assets/khali.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  function handleSubmit(data: void): void {
    console.log(data);
  }

  return (
    <Container>
      <Background>
        <Content>
          <img src={logoImg} alt="KhalyStore" />

          <Form onSubmit={handleSubmit}>
            <h1>Cadastre-se</h1>

            <Input name="name" icon={FiUser} placeholder="Nome" />
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />
            <Input name="cpf" icon={FiFileText} placeholder="CPF" />
            <Input name="rg" icon={FiFileText} placeholder="RG" />
            <Input
              name="dateOfBirth"
              icon={FiGift}
              placeholder="Data de nascimento"
            />
            <Input name="genre" icon={FiUser} placeholder="Genero" />
            <Input name="celphone" icon={FiSmartphone} placeholder="Celular" />
            <Input name="address" icon={FiFileText} placeholder="Endereço" />
            <Input name="number" icon={FiFileText} placeholder="Numero" />
            <Input
              name="description"
              icon={FiFileText}
              placeholder="Descriçao: Ex casa/apto 55"
            />
            <Input name="zipCode" icon={FiFileText} placeholder="CEP" />
            <Input name="neighborhood" icon={FiFileText} placeholder="Bairro" />
            <Input
              name="reference"
              icon={FiFileText}
              placeholder="Referencia: Ex Perto do bar do juca"
            />
            <Input name="city" icon={FiFileText} placeholder="Cidade" />
            <Input name="state" icon={FiFileText} placeholder="Estado" />

            <Button type="submit">Cadastrar</Button>
          </Form>

          <a href="/SignIn">
            <FiArrowLeft />
            Voltar para logon
          </a>
        </Content>
      </Background>
    </Container>
  );
};

export default SignUp;
