import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: auto;

  background-color: #fff;
  border-radius: 9px;
`;

export const Content = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    margin: 80px 0;
    width: 500px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
      color: #ffb6c1;
      font-weight: 500;
    }

    input {
      background: #ffb6c1;
      color: #fff;
      font-weight: 500;
      border-radius: 10px;
      border: 2px solid #ffb6c1;
      padding: 16px;
      width: 90%;

      &::placeholder {
        color: #fff;
        font-weight: 500;
      }

      & + input {
        margin-top: 8px;
      }
    }

    button {
      background: #e57373;
      color: #fff;
      height: 56px;
      border: 0;
      border-radius: 10px;
      padding: 0 16px;
      width: 90%;
      font-weight: 500;
      margin-top: 16px;
      transition: color 0.2s;

      &:hover {
        background: ${shade(0.2, '#e57373')};
      }
    }

    a {
      color: #e57373;
      display: block;
      margin-top: 18px;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#e57373')};
      }
    }
  }

  > a {
    color: #e57373;
    display: block;
    margin: 10px 0 15px 0;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#e57373')};
    }
  }

  img {
    height: 200px;
    width: 200px;
  }
`;
