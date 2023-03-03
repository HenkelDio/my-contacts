import styled, { css } from 'styled-components';

export const Container = styled.div`
 & + & {
  margin-top: 16px;
 }

 small {
  margin-top: 8px;
  display: block;
  ${({ theme, error }) => error && css`
    color: ${theme.colors.danger.main};
 `};
 }

`;
