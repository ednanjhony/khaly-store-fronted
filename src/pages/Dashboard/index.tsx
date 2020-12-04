import React from 'react';
import { FiArrowDown, FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi';

import logoImg from '../../assets/khali.png';

import { Container, Header, Logo, List, Nav, Main } from './styles';

const Dashboard: React.FC = () => (
  <Container>
    <Header>
      <List>
        <li>
          <a href="/">
            Shop <FiArrowDown />
          </a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
      </List>

      <Logo>
        <img src={logoImg} alt="KhalyStore" />
      </Logo>

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
    </Header>

    <Main>
      <span>oi</span>
    </Main>
  </Container>
);

export default Dashboard;
