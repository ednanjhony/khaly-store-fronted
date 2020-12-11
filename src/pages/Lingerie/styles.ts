import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 100%;
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
  margin-bottom: 20px;

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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  height: 1100px;

  @media (max-width: 1410px) {
    height: 1600px;
  }

  @media (max-width: 1300px) {
    height: 1900px;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fff;
  border-radius: 9px;
  width: 95%;
  height: 100px;

  div.title {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    width: 95%;
    border-radius: 9px;
    height: 60px;
    background-color: #fce4ec;

    > h2 {
      color: #e57373;
      font-size: 50px;
      font-family: 'Dancing Script', cursive;
      font-weight: 600;
    }
  }
`;

export const Background = styled.div`
  background-color: #fff;
  height: 900px;
  width: 85%;
  border-radius: 9px;
  margin-top: 30px;

  @media (max-width: 1410px) {
    height: 1600px;
  }

  @media (max-width: 1100px) {
    height: 1750px;
  }
`;

export const Products = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  max-width: 1500px;
  margin: 0 auto;
  grid-gap: 20px;

  @media (max-width: 1500px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 9px;
    background-color: #fce4ec;
    width: 300px;
    height: 320px;
    margin: 30px auto;

    img {
      height: 200px;
      width: 200px;
      border-radius: 9px;
    }

    span {
      color: #000;
      margin-bottom: 5px;
    }

    button {
      height: 50px;
      width: 200px;
      border-radius: 9px;
      border: 0;
      background-color: #e57373;
    }
  }
`;
