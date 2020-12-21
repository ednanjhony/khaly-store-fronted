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
  grid-gap: 10px;
  background-color: #fff;
  height: 600px;
  width: 95%;
  min-width: 1200px;
  border-radius: 9px;
`;

export const Product = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin: 100px auto;

  div {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #bdbdbd;
    width: 600px;

    + div {
      margin-top: 20px;
    }
    img {
      height: 35px;
      width: 35px;
      border-radius: 9px;
      margin-right: 20px;
      margin-bottom: 5px;
    }

    span {
      color: #e57373;
      font-weight: 500;
    }
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin: 30px auto;

  span {
    font-weight: 600;
    color: #e57373;
    margin-bottom: 10px;
  }

  button {
    height: 50px;
    width: 200px;
    border-radius: 9px;
    border: 0;
    background-color: #e57373;
  }
`;
