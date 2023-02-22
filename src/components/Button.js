import styled from 'styled-components';

export default styled.button`
  width: 100%;
  height: 52px;
  border: none;
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
`;
