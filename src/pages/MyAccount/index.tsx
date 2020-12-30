import React from 'react';
import {
  FiSearch,
  FiShoppingCart,
  FiUser,
  FiFacebook,
  FiInstagram,
  FiMail,
  FiLock,
  FiFileText,
  FiGift,
  FiSmartphone,
} from 'react-icons/fi';

import Input from '../../components/Input';

import logo from '../../assets/khali.png';
import item1 from '../../assets/item1.jpg';
import back1 from '../../assets/back1.jpg';

import {
  Container,
  Header,
  Message,
  Navigation,
  Section,
  Footer,
} from './styles';

const MyAccount: React.FC = () => {
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
          <h1>Painel do usuario</h1>
        </div>

        <form>
          <Input name="name" icon={FiUser} placeholder="Eneias" />
          <Input name="email" icon={FiMail} placeholder="Eneias21@go.com" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />
          <Input name="cpf" icon={FiFileText} placeholder="CPF" />
          <Input name="rg" icon={FiFileText} placeholder="RG" />
          <Input
            name="dateOfBirth"
            icon={FiGift}
            placeholder="Data de nascimento"
          />
          <Input name="genre" icon={FiUser} placeholder="Genero" />
          <Input name="celphone" icon={FiSmartphone} placeholder="Celular" />
          <Input name="address" icon={FiFileText} placeholder="Endereço" />
          <Input name="number" icon={FiFileText} placeholder="Numero" />
          <Input
            name="description"
            icon={FiFileText}
            placeholder="Descriçao: Ex casa/apto 55"
          />
          <Input name="zipCode" icon={FiFileText} placeholder="CEP" />
          <Input name="neighborhood" icon={FiFileText} placeholder="Bairro" />
          <Input
            name="reference"
            icon={FiFileText}
            placeholder="Referencia: Ex Perto do bar do juca"
          />
          <Input name="city" icon={FiFileText} placeholder="Cidade" />
          <Input name="state" icon={FiFileText} placeholder="Estado" />
          <button type="submit">Salvar</button>
        </form>
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

export default MyAccount;
