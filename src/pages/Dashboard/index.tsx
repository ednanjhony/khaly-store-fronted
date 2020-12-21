import React from 'react';
import {
  FiSearch,
  FiShoppingCart,
  FiUser,
  FiFacebook,
  FiInstagram,
} from 'react-icons/fi';

import logo from '../../assets/khali.png';
import section1 from '../../assets/section1.jpg';
import section2 from '../../assets/section2.jpg';
import main1 from '../../assets/main1.jpg';
import main3 from '../../assets/main3.jpg';

import {
  Container,
  Header,
  Message,
  Navigation,
  Section,
  Section2,
  Section3,
  Itens,
  Footer,
} from './styles';

const Dashboard: React.FC = () => {
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
        <div>
          <a href="lingirie">
            <img src={section1} alt="Lingirie" />
          </a>
          <span>Sinta-se leve e linda.</span>
        </div>

        <div>
          <a href="lingirie">
            <img src={section2} alt="Lingirie" />
          </a>
          <span>Sinta-se leve e linda.</span>
        </div>
      </Section>

      <Section2>
        <div>
          <a href="acessorios">
            <img src={main1} alt="acessorios" />
          </a>
        </div>
        <div className="box">
          <span>ACESSORIOS LINDOS, ESCOLHA UM QUE SEJA A SUA CARA.</span>
        </div>
      </Section2>

      <Section3>
        <div>
          <h1>SE PREPARE PARA NOSSAS NOVIDADES, VOCE VAI FICAR ENCANTADA.</h1>
          <h2>Nao perca tempo, escolha seu produto antes que esgote :)</h2>
        </div>
      </Section3>

      <Itens>
        <div>
          <a href="lingirie">
            <img src={main3} alt="Lingirie" />
            <h3>Lingirie preta</h3>
            <span>R$100,00</span>
          </a>
        </div>

        <div>
          <a href="lingirie">
            <img src={main3} alt="Lingirie" />
            <h3>Lingirie preta</h3>
            <span>R$100,00</span>
          </a>
        </div>

        <div>
          <a href="lingirie">
            <img src={main3} alt="Lingirie" />
            <h3>Lingirie preta</h3>
            <span>R$100,00</span>
          </a>
        </div>
      </Itens>

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

export default Dashboard;
