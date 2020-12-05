import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  width: 100%;
  height: 100px;
  padding: 0 50px 0 50px;

  a {
    text-decoration: none;
    color: #e57373;
  }
`;

export const Logo = styled.div`
  display: flex;

  img {
    height: 80px;
    width: 80px;
  }
`;

export const List = styled.div`
  display: flex;

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
      margin: 30px 40px 0 40px;
    }
  }
`;
