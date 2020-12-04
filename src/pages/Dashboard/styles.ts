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
  max-width: 100%;
  height: 600px;
  margin-top: 30px;
`;
