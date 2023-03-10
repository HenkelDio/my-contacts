import styled, { css } from 'styled-components';

export default styled.input`
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border: none;
  height: 52px;
  border-radius: 4px;
  outline: none;
  padding: 0px 16px;
  font-size: 16px;
  font-family: 'Sora', sans-serif;
  border: 2px solid #fff;
  transition: border-color 0.2s ease-in;

  &:focus{
    border: 2px solid ${(props) => props.theme.colors.primary.main};
  }

  ${({ theme, error }) => error && css`
    border: 2px solid ${theme.colors.danger.main};

    &:focus {
      border: 2px solid ${theme.colors.danger.main};
    }
  `};
`;
