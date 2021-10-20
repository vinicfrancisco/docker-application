import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  flex-direction: column;

  > header {
    align-items: center;
    background: #000c61;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    padding: 32px;
    width: 100%;

    > h2 {
      color: #dfe4e8;
      font-size: 32px;
      font-weight: bold;
    }

    > h5 {
      color: #dfe4e8;
      font-size: 24px;
      font-weight: 600;
      margin-top: 16px;
    }
  }

  main {
    display: flex;
    flex: 1;
    justify-content: flex-start;
    width: 100%;
  }
`;

export const Menu = styled.ul`
  background: #fff;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
  height: 100%;

  > li {
    padding: 16px;
    padding-right: 40px;
    transition: all 0.3s;

    &:hover {
      background: #00b0f0;
    }
  }
`;

export const Item = styled(Link)<{ active: boolean }>`
  padding: 8px;
  color: #000;
  font-size: 16px;
  text-decoration: none;

  ${({ active }) =>
    active &&
    css`
      font-weight: bold;
      color: #000c61;
    `}
`;
