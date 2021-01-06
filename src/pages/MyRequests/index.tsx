import React from 'react';
import {
  FiSearch,
  FiShoppingCart,
  FiUser,
  FiFacebook,
  FiInstagram,
} from 'react-icons/fi';

import logo from '../../assets/khali.png';

import {
  Container,
  Header,
  Message,
  Navigation,
  Section,
  Footer,
} from './styles';

const MyRequests: React.FC = () => {
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
          <h1>Meus pedidos</h1>
        </div>
        <div className="content">
          <div className="content-title">
            <ul>
              <li>Pedido</li>
              <li>Data</li>
              <li>Pagamento</li>
              <li>Situaçao</li>
            </ul>
          </div>
          <div className="content-itens">
            <ul>
              <li>
                <a href="/detailsRequest">#01</a>
              </li>
              <li>
                <a href="/detailsRequest">08/09</a>
              </li>
              <li>
                <a href="/detailsRequest">Boleto</a>
              </li>
              <li>
                <a href="/detailsRequest">Entregue</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/detailsRequest">#01</a>
              </li>
              <li>
                <a href="/detailsRequest">08/09</a>
              </li>
              <li>
                <a href="/detailsRequest">Boleto</a>
              </li>
              <li>
                <a href="/detailsRequest">Entregue</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/detailsRequest">#01</a>
              </li>
              <li>
                <a href="/detailsRequest">08/09</a>
              </li>
              <li>
                <a href="/detailsRequest">Boleto</a>
              </li>
              <li>
                <a href="/detailsRequest">Entregue</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/detailsRequest">#01</a>
              </li>
              <li>
                <a href="/detailsRequest">08/09</a>
              </li>
              <li>
                <a href="/detailsRequest">Boleto</a>
              </li>
              <li>
                <a href="/detailsRequest">Entregue</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/detailsRequest">#01</a>
              </li>
              <li>
                <a href="/detailsRequest">08/09</a>
              </li>
              <li>
                <a href="/detailsRequest">Boleto</a>
              </li>
              <li>
                <a href="/detailsRequest">Entregue</a>
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

export default MyRequests;
