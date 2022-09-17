import styled from 'styled-components';

export const Wrap = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
`;

export const Content = styled.section`
  flex: 1;
  overflow: auto;
  height: 100vh;
  padding: 4px 56px 0 56px;
`;

export const Inner = styled.section`
  background: ${(props) => props.theme.palette.mainBackground};
  height: calc(100% - 88px);
  overflow-y: auto;
`;
