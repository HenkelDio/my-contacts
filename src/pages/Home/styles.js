import styled from 'styled-components';

export const Container = styled.div`
  width: 500px;

  position: relative;
`;

export const InputSearch = styled.div`
 input {
    outline: none;
    border: none;
    width: 100%;
    height: 50px;
    background-color: #fff;
    border-radius: 25px;
    padding: 0px 20px;
    font-family: 'Sora', sans-serif;
    font-size: 16px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

    &::placeholder{
      color: #BCBCBC;

    }
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;

  strong {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.gray[900]};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary.main};
    font-weight: bold;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    padding: 8px 16px;
    border-radius: 4px;
    transition: all 0.2s ease-in;

    &:hover{
      background: ${({ theme }) => theme.colors.primary.main};
      color: #fff;
    }
  }
`;

export const ListContainer = styled.div`
  margin-top: 24px;


  header {
    margin-bottom: 8px;
    button {
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    cursor: pointer;

    span {
      margin-right: 8px;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }
  }
`;

export const Card = styled.div`
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & + & {
    margin-top: 16px;
  }

  .info {
    .contact-name{
      display: flex;
      align-items: center;

      small {
        background-color: ${({ theme }) => theme.colors.primary.lighter};
        color: ${({ theme }) => theme.colors.primary.main};
        font-weight: bold;
        text-transform: uppercase;
        padding: 4px;
        border-radius: 4px;
        margin-left: 8px;
      }
    }

    span {
      display: block;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.gray[200]};
    }
  }

  .actions {
      display: flex;
      align-items: center;

      button {
        background: transparent;
        border: none;
        margin-left: 8px;
        cursor: pointer;
      }
    }

`;
