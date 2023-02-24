import styled, { css } from 'styled-components';

export default styled.button`
  height: 52px;
  border: none;
  padding: 0 16px;
  background-color: ${(props) => props.theme.colors.primary.main};
  font-size: 16px;
  box-shadow: 0px 4px 10px rgba(0,0,0, 0.04);
  cursor: pointer;
  font-weight: bold;
  color: #fff;
  border-radius: 4px;
  font-family: 'Sora', sans-serif;
  transition: background 0.2s ease-in;

  &:hover{
    background-color: ${(props) => props.theme.colors.primary.light};
  }

  &:active{
    background-color: ${(props) => props.theme.colors.primary.dark};
  }

  &:disabled {
    background-color: #ccc;
    cursor: default;
  }

  ${({ danger, theme }) => (
    danger && css`
      background-color: ${theme.colors.danger.main};


    &:hover{
    background-color: ${theme.colors.danger.light};
  }

    &:active{
      background-color: ${theme.colors.danger.dark};
    }
    `
  )}
`;
