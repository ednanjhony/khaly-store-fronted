import React from 'react';
import { FiMail, FiArrowLeft } from 'react-icons/fi';

import logoImg from '../../assets/khali.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const ForgotPassword: React.FC = () => (
  <Container>
    <Background>
      <Content>
        <img src={logoImg} alt="KhalyStore" />

        <form>
          <h1>Recupere sua senha.</h1>

          <Input name="email" icon={FiMail} placeholder="E-mail" />

          <Button type="submit">Recuperar</Button>
        </form>

        <a href="create">
          <FiArrowLeft />
          Voltar para logon
        </a>
      </Content>
    </Background>
  </Container>
);

export default ForgotPassword;
