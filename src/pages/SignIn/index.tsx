import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/khali.png';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Background>
      <Content>
        <img src={logoImg} alt="KhalyStore" />

        <form>
          <h1>Faça seu logon</h1>

          <input placeholder="E-mail" />

          <input type="password" placeholder="Senha" />

          <button type="submit">Entrar</button>

          <a href="forgot">Esqueci minha senha</a>
        </form>

        <a href="create">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
    </Background>
  </Container>
);

export default SignIn;
