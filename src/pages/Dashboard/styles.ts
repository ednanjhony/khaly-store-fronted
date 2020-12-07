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
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  height: 50px;
  width: 100%;
  padding-left: 30px;

  a {
    text-decoration: none;
    color: #e57373;
    margin-right: 30px;
  }
`;

export const List = styled.div`
  display: flex;
  padding: 0 5px;

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
  justify-content: space-between;
  max-width: 100%;
  height: 600px;
  margin: 100px 200px 0 200px;

  div {
    height: 350px;
    width: 350px;
    border-radius: 9px;
    box-shadow: 2px 2px 2px #e0e0e0;
    background-color: #e0e0e0;

    img {
      width: 350px;
      height: 350px;
      border-radius: 9px;
      box-shadow: 2px 2px 2px #e57373;
      margin: 30px 40px 0 40px;
    }

    button {
      background-color: #fff;
      color: #e57373;
      opacity: 0.3;
      position: relative;
      height: 40px;
      width: 150px;
      border-radius: 9px;
      border: 0;
      top: -30%;
      right: -40%;

      &:hover {
        background-color: #fff;
        opacity: 1;
      }
    }
  }
`;

export const Description = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: 500px;
  width: 100%;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 200px;
    width: 90%;
    background-color: #fce4ec;

    > h2 {
      margin-left: 150px;
      color: #e57373;
      font-family: 'Dancing Script', cursive;
      font-weight: 600;
    }

    > img {
      height: 350px;
      width: 350px;
      border-radius: 9px;
      box-shadow: 2px 2px 2px #e57373;
    }
  }
`;
