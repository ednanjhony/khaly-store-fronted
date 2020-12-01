import styled from 'styled-components';

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
    }

    input {
      background: #ffb6c1;
      border-radius: 10px;
      border: 2px solid #ffb6c1;
      padding: 16px;
      width: 60%;
    }
  }

  img {
    height: 200px;
    width: 200px;
  }
`;
