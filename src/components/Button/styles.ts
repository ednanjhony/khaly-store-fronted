import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
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
`;
