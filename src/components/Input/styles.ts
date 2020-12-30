import styled from 'styled-components';

export const Container = styled.div`
  background: #ffb6c1;
  font-weight: 500;
  border-radius: 10px;
  border: 2px solid #ffb6c1;
  padding: 16px;
  margin: 0 auto;
  width: 300px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #fff;
    font-size: 14px;

    &::placeholder {
      color: #fff;
      font-weight: 500;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
