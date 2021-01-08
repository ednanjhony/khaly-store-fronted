import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
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

  ${props =>
    props.isFocused &&
    css`
      color: #e57373;
      border-color: #e57373;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #e57373;
    `}

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
