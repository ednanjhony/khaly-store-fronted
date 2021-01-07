import React from 'react';
import {
  FiSearch,
  FiShoppingCart,
  FiUser,
  FiFacebook,
  FiInstagram,
} from 'react-icons/fi';

import logo from '../../assets/khali.png';
import item1 from '../../assets/item1.jpg';

import {
  Container,
  Header,
  Message,
  Navigation,
  Section,
  Footer,
} from './styles';

const DetailsRequest: React.FC = () => {
  return (
    <Container>
      <Message>
        <h2>Bem-vindo a Khaly</h2>
      </Message>
      <Header>
        <img src={logo} alt="KhalyStore" />

        <Navigation>
          <div className="itens">
            <ul>
              <li>
                <a href="lingiries">Lingiries</a>
              </li>
              <li>
                <a href="biquinis">Biquinis</a>
              </li>
              <li>
                <a href="semijoias">Semijoias</a>
              </li>
              <li>
                <a href="folheadas">Folheadas</a>
              </li>
            </ul>
          </div>

          <div className="menu">
            <ul>
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
            </ul>
          </div>
        </Navigation>
      </Header>

      <Section>
        <div className="title">
          <h1>Meu pedido #01</h1>
        </div>

        <div className="myItens">
          <div className="item">
            <ul>
              <li>
                <img src={item1} alt="Lingirie" />
              </li>
              <li>
                <span>Lingirie</span>
              </li>
              <li>
                <span>R$100,00</span>
              </li>
              <li>
                <span>Tamanho: P</span>
              </li>
              <li>
                <span>QTD: 2</span>
              </li>
            </ul>
          </div>
          <div className="item">
            <ul>
              <li>
                <img src={item1} alt="Lingirie" />
              </li>
              <li>
                <span>Lingirie</span>
              </li>
              <li>
                <span>R$100,00</span>
              </li>
              <li>
                <span>Tamanho: P</span>
              </li>
              <li>
                <span>QTD: 2</span>
              </li>
            </ul>
          </div>
          <div className="item">
            <ul>
              <li>
                <img src={item1} alt="Lingirie" />
              </li>
              <li>
                <span>Lingirie</span>
              </li>
              <li>
                <span>R$100,00</span>
              </li>
              <li>
                <span>Tamanho: P</span>
              </li>
              <li>
                <span>QTD: 2</span>
              </li>
            </ul>
          </div>
          <div className="item">
            <ul>
              <li>
                <img src={item1} alt="Lingirie" />
              </li>
              <li>
                <span>Lingirie</span>
              </li>
              <li>
                <span>R$100,00</span>
              </li>
              <li>
                <span>Tamanho: P</span>
              </li>
              <li>
                <span>QTD: 2</span>
              </li>
            </ul>
          </div>
          <div className="item">
            <ul>
              <li>
                <img src={item1} alt="Lingirie" />
              </li>
              <li>
                <span>Lingirie</span>
              </li>
              <li>
                <span>R$100,00</span>
              </li>
              <li>
                <span>Tamanho: P</span>
              </li>
              <li>
                <span>QTD: 2</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Footer>
        <div className="payment">
          <h3>Formas de pagamento</h3>
          <ul>
            <li>Visa</li>
            <li>MasterCard</li>
            <li>Boleto</li>
          </ul>
        </div>

        <div className="socialNetwork">
          <h3>Redes sociais</h3>
          <ul>
            <li>
              <a href="facebook">
                <FiFacebook />
              </a>
            </li>
            <li>
              <a href="instagram">
                <FiInstagram />
              </a>
            </li>
          </ul>
        </div>

        <div className="questions">
          <ul>
            <li>
              <a href="/about">Sobre nos</a>
            </li>
            <li>
              <a href="/doubts">Duvidas frequentes</a>
            </li>
            <li>
              <a href="/change">Politica de troca e devoluçao</a>
            </li>
          </ul>
        </div>
      </Footer>
    </Container>
  );
};

export default DetailsRequest;
