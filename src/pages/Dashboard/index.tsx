import React from 'react';
import { FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi';

import logoImg from '../../assets/khali.png';
import main2 from '../../assets/main2.jpg';
import main1 from '../../assets/main1.jpg';
import description from '../../assets/description.jpg';

import {
  Container,
  Header,
  Logo,
  HeaderWelcome,
  Navigation,
  List,
  Nav,
  Main,
  Description,
} from './styles';

const Dashboard: React.FC = () => (
  <Container>
    <Header>
      <Logo>
        <img src={logoImg} alt="KhalyStore" />
      </Logo>
    </Header>

    <HeaderWelcome>
      <h1>Bem-Vindo a Khaly store</h1>
    </HeaderWelcome>

    <Navigation>
      <List>
        <li>
          <a href="/">Lingeries</a>
        </li>
        <li>
          <a href="/">Biquinis</a>
        </li>
        <li>
          <a href="/">Semi-joias</a>
        </li>
        <li>
          <a href="/">Bijuteria</a>
        </li>
        <li>
          <a href="/">Folheado</a>
        </li>
      </List>

      <Nav>
        <li>
          <a href="/search">
            <FiSearch />
          </a>
        </li>
        <li>
          <a href="/cart">
            <FiShoppingCart />
          </a>
        </li>
        <li>
          <a href="/SignIn">
            <FiUser />
          </a>
        </li>
      </Nav>
    </Navigation>

    <Main>
      <div>
        <img src={main2} alt="" />
        <button type="button">COMPRE AGORA</button>
      </div>
      <div>
        <img src={main1} alt="" />
        <button type="button">COMPRE AGORA</button>
      </div>
    </Main>

    <Description>
      <div>
        <h2>
          Entregamos para todo o Brasil, Selecione seus produtos e calcule o
          frete.
        </h2>
        <img src={description} alt="Description" />
      </div>
    </Description>
  </Container>
);

export default Dashboard;
