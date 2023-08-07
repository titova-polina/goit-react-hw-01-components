import styled from 'styled-components';

export const Table = styled.table`
  margin-bottom: 50px;
  padding: 0 5px 5px;
  text-align: center;

  & tr:nth-child(2n) {
    background-color: #807e7d;
  }
`;

export const HeadTable = styled.thead`
  background-color: #03d1ff;
`;

export const HeadTitle = styled.th`
  width: calc(100% / 3);
  padding: 5px;
  color: #fff;
`;
