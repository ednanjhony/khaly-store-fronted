import React from 'react';
import { FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi';

import logoImg from '../../assets/khali.png';
import main3 from '../../assets/main3.jpg';

import {
  Container,
  Header,
  Logo,
  HeaderWelcome,
  Navigation,
  List,
  Nav,
  Main,
  Background,
  Product,
  Details,
} from './styles';

const ShowDetails: React.FC = () => (
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
      <Background>
        <Product>
          <div>
            <img src={main3} alt="lingerie" />
          </div>
        </Product>

        <Details>
          <div>
            <h2>Lingerie preta</h2>
            <h2>Preço: R$100,00</h2>
            <span>Voce vai se amar ainda mais</span>
          </div>
          <button type="button">COMPRAR</button>
        </Details>
      </Background>
    </Main>
  </Container>
);

export default ShowDetails;
