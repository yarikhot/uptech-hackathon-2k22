import styled from 'styled-components';
import { Link as LinkStyle } from 'react-router-dom';

export const Link = styled(LinkStyle)`
  cursor: pointer;
  font-weight: 600;
  font-size: 13px;
  line-height: 174%;
  color: ${(props) => props.theme.palette.primary.main};
  text-decoration: underline;
`;

export const LinkButton = styled.button`
  cursor: pointer;
  font-weight: 600;
  font-size: 13px;
  border: none;
  background: transparent;
  line-height: 174%;
  color: ${(props) => props.theme.palette.primary.main};
  text-decoration: underline;

  &:disabled {
    color: ${(props) => props.theme.palette.text.disabled};
  }
`;
