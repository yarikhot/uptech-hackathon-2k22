import styled from 'styled-components';
import MuiListItemButton from '@mui/material/ListItemButton';

export interface CollapseButtonProps {
  open: boolean;
}

export const SidebarWrap = styled.aside`
  height: 100%;
  width: 244px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px 24px;
  background: ${(props) => props.theme.palette.backgrounds.secondary};
`;

export const ListItemButton = styled(MuiListItemButton)`
  border-radius: 10px;
  height: 42px;
  transition: all 0.2s linear;

  &.active {
    background-color: ${(props) => props.theme.palette.backgrounds.primary};

    .MuiTypography-root {
      color: ${(props) => props.theme.palette.primary.main};
    }
  }

  &:hover {
    background-color: ${(props) => props.theme.palette.backgrounds.primary};

    .MuiTypography-root {
      color: ${(props) => props.theme.palette.primary.main};
    }
  }
`;
