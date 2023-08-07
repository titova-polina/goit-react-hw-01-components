import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: 100%;
`;

const getColorProp = ({ $bgColor }) => $bgColor || '#fff';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: calc(100% / 5);
  padding: 4px;
  background-color: ${getColorProp};

  &:first-child {
    border-radius: 0 0 0 8px;
  }

  &:last-child {
    border-radius: 0 0 8px 0;
  }
`;

export const Title = styled.h2`
  padding: 20px 0;
  text-align: center;
  color: #2e2e2e;
`;

export const Desc = styled.span`
  color: #fff;
  text-align: center;
`;
