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
import back1 from '../../assets/back1.jpg';

import {
  Container,
  Header,
  Message,
  Navigation,
  Section,
  Section2,
  Footer,
} from './styles';

const ShowDetails: React.FC = () => {
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
        <div className="item">
          <a href="/zoom">
            <img src={item1} alt="Lingirie" />
          </a>
        </div>

        <div className="options">
          <div className="title">
            <h3>Lingirie</h3>
            <span>R$100,00</span>
          </div>
          <div className="size">
            <button type="submit">P</button>
            <button type="submit">M</button>
            <button type="submit">G</button>
          </div>
          <div className="buy">
            <button type="submit">COMPRAR</button>
          </div>
        </div>
      </Section>

      <Section2>
        <div className="details">
          <h3>Os detalhes</h3>
          <h4>Lingirie</h4>
          <span>
            Lingirie leve e macio, boa para se sentir confortavel e dar aquela
            surpreendida no seu parceiro
          </span>
        </div>

        <div className="showImage">
          <img src={back1} alt="Lingirie" />
        </div>
      </Section2>

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

export default ShowDetails;
