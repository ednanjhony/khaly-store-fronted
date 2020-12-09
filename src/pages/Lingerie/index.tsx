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
  Title,
  Background,
  Products,
} from './styles';

const Lingerie: React.FC = () => (
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
      <Title>
        <div className="title">
          <h2>Lingeries</h2>
        </div>
      </Title>

      <Background>
        <Products>
          <div>
            <img src={main3} alt="lingerie" />
            <span>Lingerie preta</span>
            <span>Valor R$: 100,00</span>
            <button type="button">Comprar</button>
          </div>

          <div>
            <img src={main3} alt="lingerie" />
            <span>Lingerie preta</span>
            <span>Valor R$: 100,00</span>
            <button type="button">Comprar</button>
          </div>

          <div>
            <img src={main3} alt="lingerie" />
            <span>Lingerie preta</span>
            <span>Valor R$: 100,00</span>
            <button type="button">Comprar</button>
          </div>

          <div>
            <img src={main3} alt="lingerie" />
            <span>Lingerie preta</span>
            <span>Valor R$: 100,00</span>
            <button type="button">Comprar</button>
          </div>

          <div>
            <img src={main3} alt="lingerie" />
            <span>Lingerie preta</span>
            <span>Valor R$: 100,00</span>
            <button type="button">Comprar</button>
          </div>

          <div>
            <img src={main3} alt="lingerie" />
            <span>Lingerie preta</span>
            <span>Valor R$: 100,00</span>
            <button type="button">Comprar</button>
          </div>

          <div>
            <img src={main3} alt="lingerie" />
            <span>Lingerie preta</span>
            <span>Valor R$: 100,00</span>
            <button type="button">Comprar</button>
          </div>

          <div>
            <img src={main3} alt="lingerie" />
            <span>Lingerie preta</span>
            <span>Valor R$: 100,00</span>
            <button type="button">Comprar</button>
          </div>
        </Products>
      </Background>
    </Main>
  </Container>
);

export default Lingerie;
