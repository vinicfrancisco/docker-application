import styled from 'styled-components';

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;

  > thead {
    > tr {
      background: #fafafa;
      border-bottom: 1px solid rgba(0, 0, 0, 0.09);
      height: 54px;
      z-index: 10;

      > th {
        color: #000;
        font-size: 14px;
        border: none;
        max-width: 100px;
      }
    }
  }

  > tbody {
    > tr {
      background: #fff;
      border-bottom: 1px solid rgba(0, 0, 0, 0.09);
      height: 54px;

      > td {
        color: #000;
        font-size: 14px;
        text-align: center;
      }
    }
  }
`;
