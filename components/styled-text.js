// components/styled-text.js
import styled from '@emotion/styled';

const Attribute = styled.span`
  background-color: ${({ variant }) =>
    variant === 'danger' ? '#ff7a7a' : '#4a4a4a'};
  color: #f5f5f5;
  padding: 2px 8px;
  margin: 0 2px;
  border-radius: 6px;
  font-family: monospace;
  font-size: 0.85rem;
`;

export default Attribute