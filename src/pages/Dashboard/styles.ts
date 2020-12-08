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
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  height: 600px;
  width: 95%;
  border-radius: 9px;

  div.oneImage {
    display: flex;
    position: relative;
    border: 0;
    right: 5%;
    top: -3%;

    img {
      position: relative;
      width: 300px;
      height: 450px;
      border-radius: 9px;
      box-shadow: 2px 2px 2px #bdbdbd;
    }

    button {
      position: relative;
      background-color: #fff;
      color: #e57373;
      opacity: 0.3;
      height: 40px;
      width: 150px;
      border-radius: 9px;
      border: 0;
      top: 300px;
      right: 220px;

      &:hover {
        background-color: #fff;
        opacity: 1;
      }
    }
  }

  div.twoImages {
    display: flex;
    position: relative;
    flex-direction: column;
    border: 0;
    right: 6%;

    img {
      position: relative;
      width: 200px;
      height: 200px;
      border-radius: 9px;
      box-shadow: 2px 2px 2px #bdbdbd;
    }

    button {
      position: relative;
      background-color: #fff;
      color: #e57373;
      opacity: 0.3;
      height: 40px;
      width: 150px;
      border-radius: 9px;
      border: 0;
      top: -80px;
      right: -25px;

      &:hover {
        background-color: #fff;
        opacity: 1;
      }
    }
  }

  div.box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 150px;
    border-radius: 9px;

    > h1 {
      color: #e57373;
      font-family: 'Dancing Script', cursive;
      font-weight: 600;
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
  overflow: hidden;

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
      box-shadow: 2px 2px 2px #bdbdbd;
    }
  }
`;
