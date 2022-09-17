import styled from 'styled-components';

export const Wrap = styled.div<{ height?: string }>`
  height: ${({ height }) => height || '100%'};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
