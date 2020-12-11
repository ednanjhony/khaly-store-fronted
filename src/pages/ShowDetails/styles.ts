import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 100%;
  min-width: 1200px;
  height: 100px;
`;

export const Logo = styled.div`
  display: flex;

  img {
    height: 80px;
    width: 80px;
  }
`;

export const HeaderWelcome = styled.div`
  display: flex;
  height: 150px;
  width: 100%;
  min-width: 1200px;
  background-color: #fce4ec;
  justify-content: center;
  align-items: center;

  > h1 {
    font-family: 'Dancing Script', cursive;
    font-weight: 600;
    color: #e57373;
  }
`;

export const Navigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: 50px;
  width: 100%;
  min-width: 1200px;

  a {
    text-decoration: none;
    color: #e57373;
    margin: 0 15px;
    padding-left: 15px;
  }
`;

export const List = styled.div`
  display: flex;
  padding: auto;
  margin: auto;

  svg {
    height: 10px;
    width: 10px;
    color: #e57373;
  }
`;

export const Nav = styled.div`
  display: flex;

  svg {
    height: 20px;
    width: 20px;
  }
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  height: 700px;
`;

export const Background = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 50px;
  background-color: #fff;
  height: 600px;
  width: 85%;
  min-width: 1200px;
  border-radius: 9px;
`;

export const Product = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;

  img {
    height: 400px;
    width: 400px;
    border-radius: 9px;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 110px auto;

  h2 {
    color: #e57373;
  }

  span {
    color: #e57373;
  }

  button {
    height: 50px;
    width: 300px;
    border-radius: 9px;
    border: 0;
    background-color: #e57373;
  }
`;
